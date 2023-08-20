<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TrackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tracks')->delete();

        $tracks = [
            ['id' => Str::uuid(), 'name' => 'Atlanta Motor Speedway'],
            ['id' => Str::uuid(), 'name' => 'Nashville Superspeedway'],
            ['id' => Str::uuid(), 'name' => 'New Hampshire Motor Speedway'],
            ['id' => Str::uuid(), 'name' => 'Bristol Motor Speedway'],
            ['id' => Str::uuid(), 'name' => 'Richmond Raceway'],
            ['id' => Str::uuid(), 'name' => 'Pocono Raceway'],
            ['id' => Str::uuid(), 'name' => 'Daytona International Speedway'],
            ['id' => Str::uuid(), 'name' => 'Watkins Glen International'],
            ['id' => Str::uuid(), 'name' => 'Indianapolis Motor Speedway Road Course'],
            ['id' => Str::uuid(), 'name' => 'Darlington Raceway'],
            ['id' => Str::uuid(), 'name' => 'Dovor Motor Speedway'],
            ['id' => Str::uuid(), 'name' => 'Talladega Superspeedway'],
            ['id' => Str::uuid(), 'name' => 'Kansas Speedway'],
            ['id' => Str::uuid(), 'name' => 'North Wilkesboro Speedway'],
            ['id' => Str::uuid(), 'name' => 'Martinsville Speedway'],
            ['id' => Str::uuid(), 'name' => 'Curcuit of the Americas'],
            ['id' => Str::uuid(), 'name' => 'Phoenix Raceway'],
            ['id' => Str::uuid(), 'name' => 'Las Vegas Motor Speedway'],
            ['id' => Str::uuid(), 'name' => 'Charlotte Motor Speedway'],
            ['id' => Str::uuid(), 'name' => 'World Wide Technology Raceway'],
            ['id' => Str::uuid(), 'name' => 'Sonoma Raceway'],
            ['id' => Str::uuid(), 'name' => 'Chicago Street Race'],
            ['id' => Str::uuid(), 'name' => 'Michigan International Speedway'],
            ['id' => Str::uuid(), 'name' => 'Texas Motor Speedway'],
            ['id' => Str::uuid(), 'name' => 'Homestead-Miami Speedway'],
        ];

        DB::table('tracks')->insert($tracks);
    }
}
