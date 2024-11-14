<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'barcode',
        'description',
        'quantity',
        'capital',
        'price',
        'remaining',
        // 'barcode',//
        // 'name',//
        // 'description',//
        // 'uom',
        // 'quantity',//
        // 'capital',
        // 'percent_selling_price',
        // 'discount',
        // 'price',//
        // 'isVat',
    ];
    public function item_product(): HasOne
    {
        return $this->hasOne(ItemProduct::class, 'barcode', 'barcode')->with(['item']);
    }
}
