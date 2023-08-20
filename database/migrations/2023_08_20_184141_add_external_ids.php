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
        Schema::table('races', function (Blueprint $table) {
            $table->uuid('external_id')->nullable();
        });

        Schema::table('tracks', function (Blueprint $table) {
            $table->uuid('external_id')->nullable();
        });

        Schema::table('drivers', function (Blueprint $table) {
            $table->uuid('external_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('races', function (Blueprint $table) {
            $table->dropColumn('external_id');
        });

        Schema::table('tracks', function (Blueprint $table) {
            $table->dropColumn('external_id');
        });

        Schema::table('drivers', function (Blueprint $table) {
            $table->dropColumn('external_id');
        });
    }
};
