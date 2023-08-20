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
        Schema::create('picks', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('host_id')->references('id')->on('hosts');
            $table->uuid('driver_id')->references('id')->on('drivers');
            $table->uuid('race_id')->references('id')->on('races');
            $table->integer('place')->nullable();
            $table->integer('points')->nullable();
            $table->boolean('regular_season');
            $table->unique(['host_id', 'driver_id', 'race_id', 'regular_season']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('picks');
    }
};
