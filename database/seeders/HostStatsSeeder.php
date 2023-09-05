<?php

namespace Database\Seeders;

use App\Models\Host;
use Illuminate\Database\Seeder;

class HostStatsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $hosts = Host::all();

        foreach ($hosts as $host) {
            $picks = $host->picks()
                ->with('race')
                ->orderBy('race.date')
                ->get();

            /**
             * picks are sorted by date ascending
             * so we can calculate culuative average for
             * each
             *  1. Cumulative Host Position
             *  2. Average Host Standing
             *  3. Average Driver Finish Position
             * by checking all prior picks
             */
            $priorPicks = collect();
            foreach ($picks as $pick) {
                

                // do this last
                $priorPicks->push($pick);
            }
        }
    }
}
