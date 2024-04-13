<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User();
        $user->name = "Victor";
        $user->email = "victor@gmail.com";
        $user->phone = "72729789";
        $user->password = Hash::make('Admin123');
        $user->email_verified_at = now();
        $user->save();

        $user1 = new User();
        $user1->name = "Barrios";
        $user1->email = "barrios@gmail.com";
        $user1->phone = "67953476";
        $user1->password = Hash::make('Admin123');
        $user1->email_verified_at = now();
        $user1->save();

        $user2 = new User();
        $user2->name = "Daniel";
        $user2->email = "daniel@gmail.com";
        $user2->phone = "77779999";
        $user2->password = Hash::make('Admin123');
        $user2->email_verified_at = now();
        $user2->save();
        
    }
}
