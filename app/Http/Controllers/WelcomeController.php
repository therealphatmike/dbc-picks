<?php

namespace App\Http\Controllers;

use App\Models\Host;
use App\Models\Pick;
use Carbon\Carbon;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        Log::info("WelcomeController->index()");

        return Inertia::render('Welcome', [
            'standings' => $this->getStandings(),
            'currentPicks' => Pick::with(['driver', 'host', 'race'])
                ->join('races', function (JoinClause $join) {
                    $join->on('races.id', '=', 'picks.race_id')
                        ->where('races.date', '>=', Carbon::now()->subDays(1));
                })
                ->orderByDesc('races.date')
                ->limit(4)
                ->get(),
            'picks' => Pick::with(['driver', 'host', 'race'])
                ->join('races', function (JoinClause $join) {
                    $join->on('races.id', '=', 'picks.race_id');
                })
                ->orderByDesc('races.date')
                ->orderBy('place')
                ->paginate(12)
                ->fragment('picks')
                ->onEachSide(1),
            'hosts' => Host::orderBy('first_name')->get(),
        ]);
    }

    private function getStandings()
    {
        Log::info("WelcomeController->getStandings()");

        $hostsWithPicks = Host::with('picks')
            ->get()
            ->each(function (Host $host) {
                $host->picks = $host->picks->filter(function ($pick) {
                    $pick->load('race');
                    return explode("-", $pick->race->date)[0] === strval(Carbon::now()->year);
                });
            });

        foreach ($hostsWithPicks as $hwp) {
            $hwp['points'] = $hwp->picks->sum('points');
            $hwp['average_pick_place'] = $hwp->picks->average('place');
            $hwp['wins'] = 0;

            foreach ($hwp->picks as $p) {
                if ($p->place === 1) $hwp['wins'] += 1;
            }
        }

        return $hostsWithPicks->sortBy([
            ['wins', 'desc'],
            ['points', 'desc'],
        ])->flatten();
    }
}
