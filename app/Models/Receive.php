<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Receive extends Model
{
    use HasFactory;
    protected $fillable = [
        'item_id',
        'quantity',
        'total_quantity',
        'status',
        'item_count'
    ];
    public function item_products(): HasMany
    {
        return $this->hasMany(ItemProduct::class, 'item_id', 'item_id');
    }
    public function item(): HasOne
    {
        return $this->hasOne(Item::class, 'item_id', 'item_id');
    }
}
