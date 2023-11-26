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
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('g_id')->unique()->unsigned();
            $table->foreign('g_id')->references('id')->on('games');
            $table->integer('country_id')->unique()->unsigned();
            $table->foreign('country_id')->references('id')->on('country');
            $table->string('start_time')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
