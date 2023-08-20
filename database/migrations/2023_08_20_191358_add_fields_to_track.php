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
        Schema::table('tracks', function (Blueprint $table) {
            $table->decimal('distance')->nullable();
            $table->string('shape')->nullable();
            $table->string('banking')->nullable();
            $table->string('fronstretch')->nullable();
            $table->string('backstretch')->nullable();
            $table->string('surface')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tracks', function (Blueprint $table) {
            $table->dropColumn('distance');
            $table->dropColumn('shape');
            $table->dropColumn('banking');
            $table->dropColumn('fronstretch');
            $table->dropColumn('backstretch');
            $table->dropColumn('surface');
            $table->dropColumn('city');
            $table->dropColumn('state');
        });
    }
};
