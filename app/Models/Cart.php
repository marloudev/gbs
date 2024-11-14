<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'receipt_id',
        'barcode',
        'supply_barcode',
        'price',
        'capital',
        'quantity',
        'randomId',
        'total',
    ];

    public function product(): HasOne
    {
        return $this->hasOne(Product::class,'barcode','barcode');
    }
}
