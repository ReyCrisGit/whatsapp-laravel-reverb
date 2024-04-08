<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($receiver_user_id, )
    {
        $contact = Contact::find($receiver_user_id);
        // $chats = Chat::where('trasmitter_user_id', 1)->where('receiver_user_id', 2)->get();
        $chats = Chat::where('code', '=', 's-1')->whereIn('receiver_user_id', [$contact->owner_user_id, auth()->user()->id] )->get();
        return Inertia::render('Contacts/Chats/Index', ['chats' => $chats, 'contact' => $contact]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
