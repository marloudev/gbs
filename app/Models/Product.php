<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'barcode',
        'description',
        'quantity',
        'price',
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
}
