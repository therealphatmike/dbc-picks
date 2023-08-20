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
        Schema::create('races', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('laps');
            $table->string('miles');
            $table->uuid('track_id')->references('id')->on('tracks');
            $table->date('date');
            $table->boolean('regular_season');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('races');
    }
};
