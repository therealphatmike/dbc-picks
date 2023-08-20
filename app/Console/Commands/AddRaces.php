<?php

namespace App\Console\Commands;

use App\Models\Race;
use App\Models\Track;
use Carbon\Carbon;
use Illuminate\Http\Client\Response as GuzzleResponse;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Response;

class AddRaces extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:add-races
    {year : year of the season}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Adds races via the SportsRadar API for NASCAR';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Starting sync via SportsRadar');
        $year = $this->argument('year');

        Http::macro('nascar', function () use ($year) {
            return Http::baseUrl("http://api.sportradar.us/nascar-ot3/mc");
        });

        Response::macro('guzzlePassthrough', function (GuzzleResponse $response) {
            return new HttpResponse($response->body(), $response->status(), $response->headers());
        });

        $this->info("Requesting data from SportRadar");
        $response = response()->guzzlePassthrough(Http::nascar()->get("/{$year}/races/schedule.json?api_key=g3n7xgb2zn95epqp6vzcvzjc"));
        $events = json_decode($response->original)->events;

        foreach($events as $event) {
            $this->info("Processing event: {$event->name}");
            $numRaces = count($event->races);
            $race = $event->races[$numRaces - 1];
            $track = Track::where('external_id', $event->track->id)->first();
            if (!$track) {
                $this->info("Track {$event->track->name} doesn't exist, creating it now");
                $track = Track::create([
                    'name' => $event->track->name,
                    'external_id' => $event->track->id,
                    'distance' => $event->track->distance ?? null,
                    'shape' => $event->track->shape ?? null,
                    'banking' => $event->track->banking ?? null,
                    'frontstretch' => $event->track->frontstretch ?? null,
                    'backstretch' => $event->track->backstretch ?? null,
                    'surface' => $event->track->surface ?? null,
                    'city' => $event->track->city ?? null,
                    'state' => $event->track->state ?? null,
                ]);
            }

            $this->info("Adding race {$race->name} to DB");
            Race::create([
                'name' => $race->name,
                'external_id' => $race->id,
                'miles' => $race->distance,
                'laps' => $race->laps,
                'date' => Carbon::createFromFormat('Y-m-d\TH:i:sP', $race->scheduled),
                'track_id' => $track->id,
                'regular_season' => Carbon::createFromFormat('Y-m-d\TH:i:sP', $race->scheduled) > Carbon::createFromDate('2023', '09', '01'),
            ]);
        }

        return 0;
    }
}
