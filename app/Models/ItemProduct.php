<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemProduct extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'item_id',
        'barcode',
        'name',
        'description',
        'uom',
        'quantity',
        'percent_selling_price',
        'discount',
    ];
    
}
