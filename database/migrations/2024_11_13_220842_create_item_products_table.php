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
        Schema::create('item_products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('item_id')->nullable();
            $table->string('barcode')->nullable();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('uom')->nullable();
            $table->double('quantity')->nullable();
            $table->double('capital')->nullable();
            $table->double('percent_selling_price')->nullable();
            $table->double('discount')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('item_products');
    }
};
