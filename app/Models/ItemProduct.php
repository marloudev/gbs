<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
    public function item(): HasOne
    {
        return $this->hasOne(Item::class, 'item_id', 'item_id');
    }
}
