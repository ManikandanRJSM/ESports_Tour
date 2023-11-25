<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1 = [
            'first_name' => 'mathew',
            'last_name' => 'Joel',
            'email' => 'mathew@gmail.com',
            'password' => Hash::make('123456'),
            'user_type' => 'organiser',
        ];

        $user2 = [
            'first_name' => 'John',
            'last_name' => 'Nicholas',
            'email' => 'nicholas@gmail.com',
            'password' => Hash::make('123456'),
            'user_type' => 'player',
        ];

        DB::table('users')->insert($user1, $user2);
    }
}
