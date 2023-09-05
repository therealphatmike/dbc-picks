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
        Schema::table('picks', function (Blueprint $table) {
            $table->integer('driver_finish_position')->nullable();
            $table->integer('year')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('picks', function (Blueprint $table) {
            $table->dropColumn('driver_finish_position');
            $table->dropColumn('year');
        });
    }
};
