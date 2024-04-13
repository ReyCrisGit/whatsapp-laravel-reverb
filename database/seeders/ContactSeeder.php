<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contact = new Contact();
        $contact->alias = "Saida";
        $contact->phone_code = '33334444';
        $contact->user_id = 1;
        $contact->save();

        $contact1 = new Contact();
        $contact1->alias = "Saida M";
        $contact1->phone_code = '33334444';
        $contact1->user_id = 2;
        $contact1->save();

        $contact2 = new Contact();
        $contact2->alias = "Sad1";
        $contact2->phone_code = '33334444';
        $contact2->user_id = 3;
        $contact2->save();

        $contact3 = new Contact();
        $contact3->alias = "Daniel";
        $contact3->phone_code = '77779999';
        $contact3->owner_user_id = 3;
        $contact3->user_id = 1;
        $contact3->save();

        $contact4 = new Contact();
        $contact4->alias = "Daniel B";
        $contact4->phone_code = '77779999';
        $contact4->owner_user_id = 3;
        $contact4->user_id = 2;
        $contact4->save();

        $contact5 = new Contact();
        $contact5->alias = "Barrios";
        $contact5->phone_code = '67953476';
        $contact5->owner_user_id = 2;
        $contact5->user_id = 1;
        $contact5->save();

        $contact6 = new Contact();
        $contact6->alias = "Victor";
        $contact6->phone_code = '72729789';
        $contact6->owner_user_id = 1;
        $contact6->user_id = 2;
        $contact6->save();


    }
}
