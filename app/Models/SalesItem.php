<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class SalesItem extends Model
{
    use HasFactory;
    protected $fillable = [
        'sales_id',
        'product_id',
        'quantity',
        'price',
        'capital'
    ];
    
    public function product(): HasOne
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }
}
