<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->string('code')->nullable();
            $table->string('message', 250);
            
            $table->unsignedBigInteger('trasmitter_user_id');
            $table->foreign('trasmitter_user_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('receiver_user_id');
            $table->foreign('receiver_user_id')->references('id')->on('users')->onDelete('cascade');


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chats');
    }
};
