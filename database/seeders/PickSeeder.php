<?php

namespace Database\Seeders;

use App\Models\Driver;
use App\Models\Host;
use App\Models\Pick;
use App\Models\Race;
use Faker\Factory as FakerFactory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class PickSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = FakerFactory::create();
        if (Race::count() === 0) {
            Log::info("No races, fetching races now");
            $this->call('app:add-races', ['year' => 2023]);
        }

        if (Host::count() === 0) {
            Log::info("No hosts, seeding hosts now");
            $this->call([
                HostSeeder::class,
            ]);
        }
        $driverCount = Driver::count();

        $driverIter = 0;
        foreach (Race::all() as $race) {
            foreach (Host::all() as $host) {
                $place = $faker->randomElement([1, 2, 3, 4]);
                $points = 0;
                switch ($place) {
                    case 1: $points = 10; break;
                    case 2: $points = 8; break;
                    case 3: $points = 4; break;
                    case 4: $points = 0; break;
                }
                Pick::create([
                    'race_id' => $race->id,
                    'host_id' => $host->id,
                    'driver_id' => Driver::inRandomOrder()->get()[$driverIter]->id,
                    'place' => $place,
                    'points' => $points,
                    'regular_season' => false,
                ]);

                $driverIter += 1;
                $driverIter = $driverCount - ($driverIter % $driverCount);
            }
        }
    }
}
