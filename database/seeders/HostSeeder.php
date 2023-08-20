<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('hosts')->delete();
        $hosts = [
            ['id' => Str::uuid(), 'first_name' => 'Casey', 'last_name' => 'Boat' ],
            ['id' => Str::uuid(), 'first_name' => 'Freddie', 'last_name' => 'Kraft' ],
            ['id' => Str::uuid(), 'first_name' => 'Brett', 'last_name' => 'Griffin' ],
            ['id' => Str::uuid(), 'first_name' => 'TJ', 'last_name' => 'Majors' ],
        ];

        DB::table('hosts')->insert($hosts);
    }
}
