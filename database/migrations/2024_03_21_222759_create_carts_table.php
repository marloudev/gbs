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
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->string('receipt_id')->nullable();
            $table->string('barcode')->nullable();
            $table->string('supply_barcode')->nullable();
            $table->double('price')->nullable();
            $table->double('capital')->nullable();
            $table->bigInteger('quantity')->nullable();
            $table->bigInteger('randomId')->nullable();
            $table->double('total')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};
