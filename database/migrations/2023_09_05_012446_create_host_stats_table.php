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
        Schema::create('host_stats', function (Blueprint $table) {
            $table->uuid('id');
            $table->integer('week');
            $table->integer('year');
            $table->integer('current_position');
            $table->float('average_pick_place');
            $table->float('average_driver_finish');
            $table->uuid('race_id');
            $table->foreign('race_id')->references('id')->on('races');
            $table->uuid('host_id');
            $table->foreign('host_id')->references('id')->on('hosts');
            $table->uuid('pick_id');
            $table->foreign('pick_id')->references('id')->on('picks');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('host_stats');
    }
};
