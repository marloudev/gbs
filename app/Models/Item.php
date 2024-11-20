<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Item extends Model
{
    use HasFactory;
    protected $fillable = [
        'item_id',
        'barcode',
        'name',
        'description',
        'uom',
        'quantity',
        'capital',
        'isVat',
    ];
    public function item_products(): HasOne
    {
        return $this->hasOne(ItemProduct::class,'item_id','item_id');
    }
    public function items(): HasMany
    {
        return $this->hasMany(ItemProduct::class,'item_id','item_id')->with(['product']);
    }

    public function product(): HasOne
    {
        return $this->hasOne(Product::class,'barcode','barcode');
    }
}
