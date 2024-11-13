<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\ItemProduct;
use App\Models\Product;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index(Request $request)
    {
        $items = Item::paginate(10);
        return response()->json([
            'status' => $items,
        ]);
    }
    public function store(Request $request)
    {
        $item = Item::where('barcode', $request->items[0]['barcode'])->first();

        if ($item && $item->item_id != $request->item_id) {
            return response()->json([
                'status' => 'exist',
            ]);
        }
        foreach ($request->items as $key => $value) {
            if (is_array($value)) {
                if ($key == 0) {
                    Item::create([
                        ...$value,
                        'item_id' => $request->item_id,
                    ]);
                }
                ItemProduct::create([
                    ...$value,
                    'item_id' => $request->item_id,
                ]);
                $product = Product::where('barcode', $value['barcode'])->first();

                if (!$product) {
                    Product::create([
                        'barcode' => $value['barcode'],
                        'description' => $value['description'],
                        'quantity' => $value['quantity'],
                        'price' => $value['price'],
                    ]);
                }
            }
        }

        return response()->json([
            'status' => 'success',
        ]);
    }
}
