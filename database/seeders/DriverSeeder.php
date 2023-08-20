<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('drivers')->delete();
        $drivers = [
            ['id' => Str::uuid(), 'first_name' => 'Darrell', 'last_name' => 'Wallace', 'suffix' => 'Jr.', 'nickname' => 'Bubba'],
            ['id' => Str::uuid(), 'first_name' => 'Tyler', 'last_name' => 'Gibbs', 'suffix' => null, 'nickname' => 'Ty'],
            ['id' => Str::uuid(), 'first_name' => 'Richard', 'last_name' => 'Stenhouse', 'suffix' => 'Jr.', 'nickname' => 'Ricky'],
            ['id' => Str::uuid(), 'first_name' => 'Martin', 'last_name' => 'Truex', 'suffix' => 'Jr.', 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Ryan', 'last_name' => 'Newman', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Burton', 'last_name' => 'McLeod', 'suffix' => null, 'nickname' => 'B.J.'],
            ['id' => Str::uuid(), 'first_name' => 'Noah', 'last_name' => 'Gragson', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Tyler', 'last_name' => 'Dillon', 'suffix' => null, 'nickname' => 'Ty'],
            ['id' => Str::uuid(), 'first_name' => 'Chase', 'last_name' => 'Briscoe', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Harrison', 'last_name' => 'Burton', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Austin', 'last_name' => 'Dillon', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Erik', 'last_name' => 'Jones', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Corey', 'last_name' => 'LaJoie', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Todd', 'last_name' => 'Gilliland', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Ryan', 'last_name' => 'Preece', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Aric', 'last_name' => 'Almirola', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Justin', 'last_name' => 'Haley', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Austin', 'last_name' => 'Cindric', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Alex', 'last_name' => 'Bowman', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Chase', 'last_name' => 'Elliott', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Daniel', 'last_name' => 'Suarez', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Anthony', 'last_name' => 'Allmendinger', 'suffix' => null, 'nickname' => 'A.J.'],
            ['id' => Str::uuid(), 'first_name' => 'Michael', 'last_name' => 'McDowell', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Brad', 'last_name' => 'Keselowski', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Kevin', 'last_name' => 'Harvick', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Christopher', 'last_name' => 'Beuscher', 'suffix' => null, 'nickname' => 'Chris'],
            ['id' => Str::uuid(), 'first_name' => 'Tyler', 'last_name' => 'Reddick', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Joseph', 'last_name' => 'Logano', 'suffix' => null, 'nickname' => 'Joey'],
            ['id' => Str::uuid(), 'first_name' => 'Ryan', 'last_name' => 'Blaney', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Christopher', 'last_name' => 'Bell', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Ross', 'last_name' => 'Chastain', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Kyle', 'last_name' => 'Larson', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Kyle', 'last_name' => 'Busch', 'suffix' => null, 'nickname' => null],
            ['id' => Str::uuid(), 'first_name' => 'Dennis', 'last_name' => 'Hamlin', 'suffix' => null, 'nickname' => 'Denny'],
            ['id' => Str::uuid(), 'first_name' => 'William', 'last_name' => 'Byron', 'suffix' => null, 'nickname' => null],
        ];

        DB::table('drivers')->insert($drivers);
    }
}
