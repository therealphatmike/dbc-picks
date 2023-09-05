<?php

namespace App\Http\Controllers;

use App\Models\Host;
use App\Models\Pick;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class HostStatsController extends Controller
{
    public function getHostStats(Request $request, Host $host)
    {
        Log::info("HostStatsController->getHostStats({$host->id})");

        $host->load('picks')->get();

        $stats['points'] = $host->picks->sum('points');
        $stats['avg_pick_place'] = $host->picks->average('place');
        $stats['wins'] = 0;

        foreach ($host->picks as $p) {
            if ($p->place === 1) $stats['wins'] += 1;
        }
        // dd(json_encode($host));
        return Inertia::render('HostStats', [
            'host' => $host,
            'hostStats' => $stats,
            'hostPicks' => Pick::with(['driver', 'host', 'race'])
                ->where('host_id', '=', $host->id)
                ->join('races', function (JoinClause $join) {
                    $join->on('races.id', '=', 'picks.race_id');
                })
                ->orderByDesc('races.date')
                ->paginate(12)
                ->onEachSide(1),
            'weeklyCumulativePosition' => [1, 2, 2, 1, 2, 4, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 2, 1, 2, 2, 2]
        ]);
    }
}
