<?php

namespace App\Console\Commands;

use App\Models\Driver;
use Illuminate\Http\Client\Response as GuzzleResponse;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Response;

class AddDrivers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:add-drivers
    {year : year of the season}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Adds drivers via the SportsRadar API for NASCAR';

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
        $response = response()->guzzlePassthrough(Http::nascar()->get("/{$year}/drivers/list.json?api_key=g3n7xgb2zn95epqp6vzcvzjc"));
        $drivers = json_decode($response->original)->drivers;

        foreach($drivers as $driver) {
            Driver::create([
                'first_name' => $driver->first_name,
                'last_name' => $driver->last_name,
                'birthday' => $driver->birthday ?? null,
                'country' => $driver->country ?? null,
                'team_name' => $driver->team->name ?? null,
            ]);
        }

        return 0;
    }
}
