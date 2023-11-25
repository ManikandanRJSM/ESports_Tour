<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $user1 = [
            'user_id' => 1,
            'country_id' => 1,
            'organization' => null,
        ];

        $user2 = [
            'user_id' => 2,
            'country_id' => 1,
            'organization' => null,
        ];

        DB::table('user_details')->insert($user1, $user2);
    }
}
