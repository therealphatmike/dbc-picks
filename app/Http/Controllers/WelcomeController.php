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
                ->limit(4)
                ->get(),
            'picks' => Pick::with(['driver', 'host', 'race'])
                ->get()
                ->sortByDesc('race.date')
                ->flatten(),
            'hosts' => Host::all(),
        ]);
    }

    private function getStandings()
    {
        Log::info("WelcomeController->getStandings()");

        $hostsWithPicks = Host::with('picks')->get();

        foreach ($hostsWithPicks as $hwp) {
            $hwp['points'] = $hwp->picks->sum('points');
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
