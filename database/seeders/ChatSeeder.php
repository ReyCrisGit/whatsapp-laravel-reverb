<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Chat;

class ChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $chat = new Chat();
        $chat->message = "V Hola";
        $chat->trasmitter_user_id = 1;
        $chat->receiver_user_id = 2;
        $chat->save();

        $chat2 = new Chat();
        $chat2->message = "B Que tal BRO";
        $chat2->trasmitter_user_id = 2;
        $chat2->receiver_user_id = 1;
        $chat2->save();

        $chat3 = new Chat();
        $chat3->message = "V Bien Gracias";
        $chat3->trasmitter_user_id = 1;
        $chat3->receiver_user_id = 2;
        $chat3->save();

        $chat4 = new Chat();
        $chat4->message = "B Unas frias";
        $chat4->trasmitter_user_id = 2;
        $chat4->receiver_user_id = 1;
        $chat4->save();

        $chat5 = new Chat();
        $chat5->message = "B OKs";
        $chat5->trasmitter_user_id = 1;
        $chat5->receiver_user_id = 2;
        $chat5->save();
    }
}