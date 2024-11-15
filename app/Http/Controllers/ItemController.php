<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\ItemProduct;
use App\Models\Product;
use App\Models\Supply;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function index(Request $request)
    {
        $items = Item::with(['items'])->paginate(10);
        return response()->json([
            'status' => $items,
        ]);
    }

    public function show($item_id)
    {
        $item = Item::where('barcode', $item_id)->with(['item_products'])->first();
        return response()->json([
            'status' => $item,
        ]);
    }
    public function store(Request $request)
    {
        $item = Item::where('barcode', $request->items[0]['barcode'])->first();

        if ($item) {
            return response()->json([
                'status' => 'exist',
            ]);
        } else {
            foreach ($request->items as $key => $value) {
                if (is_array($value)) {
                    //start ares ni
                    if ($key == 0) {
                        Item::create([
                            ...$value,
                            'item_id' => $request->item_id,
                        ]);
                    }
                    $item_product = ItemProduct::where('barcode', $value['barcode'])->first();
                    if (!$item_product) {
                        ItemProduct::create([
                            ...$value,
                            'item_id' => $request->item_id,
                        ]);
                    }
                    //end ares ni

                    //start ares ni
                    $product = Product::where('barcode', $value['barcode'])->first();
                    if ($key == 0) {
                        $supply = Supply::where('barcode', $value['barcode'])->first();
                        if (!$supply) {
                            Supply::create([
                                'barcode' => $value['barcode'],
                                'brand' => $value['name'],
                                'description' => $value['description'],
                                'uom' => $value['uom'],
                                'quantity' => 0,
                            ]);
                        }
                    }
                    if ($product) {
                        $product->update([
                            'quantity' => $value['quantity'],
                            'capital' => $value['capital'],
                            'remaining' => 0,
                        ]);
                    } else {
                        Product::create([
                            'barcode' => $value['barcode'],
                            'description' => $value['description'],
                            'quantity' => $value['quantity'],
                            'price' => $value['price'],
                            'capital' => $value['capital'],
                            'remaining' => 0,
                        ]);
                    }

                    //end ares ni
                }
            }
        }


        return response()->json([
            'status' => 'success',
        ]);
    }
}
