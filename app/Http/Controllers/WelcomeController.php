<?php

namespace App\Http\Controllers;

use App\Models\Host;
use App\Models\Pick;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        Log::info("WelcomeController->index()");

        return Inertia::render('Welcome', [
            'standings' => $this->getStandings(),
            'picks' => Pick::with(['driver', 'host', 'race'])
                ->limit(16)
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
