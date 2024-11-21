<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\ItemProduct;
use App\Models\Product;
use App\Models\Supply;
use Illuminate\Http\Request;

class ItemController extends Controller
{

    public function destroy($id)
    {
        $item = Item::where('id', $id)->first();
        if ($item) {
            $item->delete();

            $supply = Supply::where('barcode', $item->barcode)->first();
            if ($supply) {
                $supply->delete();
            }

            $item_products = ItemProduct::where('item_id', '=', $item->item_id)->get();
            foreach ($item_products as $key => $value) {
                $product =  Product::where('barcode', $value['barcode'])->first();
                if ($product) {
                    $product->delete();
                }
            }

            $item_product = ItemProduct::where('item_id', $item->item_id);
            if ($item_product) {
                $item_product->delete();
            }
        }
        return response()->json([
            'status' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $item = Item::where('barcode', '=', $request->barcode)->first();
        $supply = Supply::where('barcode', $request->barcode)->first();

        foreach ($request->items as $key => $value) {
            if (is_array($value) && $key != 0) {
                $item_product = ItemProduct::where('barcode', $value['barcode'])->first();


                if (!$item_product) {
                    ItemProduct::create([
                        ...$value,
                        'item_id' => $item->item_id ?? $request->item_id,
                    ]);
                } else {
                    $item_product->update([
                        'item_id' => $item->item_id ?? $request->item_id,
                        'barcode' => $value['barcode'],
                        'name' => $value['name'],
                        'description' => $value['description'],
                        'uom' => $value['uom'],
                        'quantity' => $value['quantity'],
                        // 'discount' => $value['discount'],
                    ]);
                }
                //end ares ni
                $product = Product::where('barcode', '=', $value['barcode'])->first();
                if (!$product) {
                    Product::create([
                        'barcode' => $value['barcode'],
                        'description' => $value['description'],
                        'quantity' => 1,
                        'price' => $value['price'],
                        'capital' => $value['capital'],
                        'remaining' => 0,
                    ]);
                } else {
                    $product->update([
                        'description' => $value['description'],
                        'capital' => $value['capital'],
                        'quantity' => $value['quantity'],
                    ]);
                }

                $item_exist = Item::where([
                    ['barcode', '=', $value['barcode']],
                    ['item_id', '=', null]
                ])->first();

                $suppy_exist = Supply::where('barcode', '=', $value['barcode'])->first();

                if ($item_exist) {
                    $item_exist->delete();
                }
                if ($suppy_exist) {
                    $suppy_exist->delete();
                }
                //end ares ni
            }
        }

        if (!$supply) {
            Supply::create([
                'barcode' => $request->barcode,
                'brand' => $request->name,
                'description' => $request->description,
                'uom' => $request->uom,
                'quantity' => 0,
            ]);
        } else {
            $supply->update([
                'brand' => $request->name,
                'description' => $request->description,
                'uom' => $request->uom,
            ]);
        }
        if ($item) {
            $item->update([
                'item_id' => $item->item_id ?? $request->item_id,
                'barcode' => $request->barcode,
                'name' => $request->name,
                'description' => $request->description,
                'uom' => $request->uom,
                'quantity' => $request->quantity,
                'capital' => $request->capital,
            ]);
        }



        return response()->json([
            'status' => 'success',
        ], 200);
    }
    public function index(Request $request)
    {
        $query = Item::with(['items', 'product']);
        if ($request->search && $request->search != 'null') {
            $query->where('item_id', '=', $request->search)
                ->orWhere(function ($q) use ($request) {
                    $q->orWhere('barcode', 'like', '%' . $request->search . '%');
                });
            $query->orWhere('description', 'like', '%' . $request->search . '%');
        }

        $query->orderByDesc('created_at');
        $items = $query->paginate(10);

        return response()->json([
            'status' => $items,
        ], 200);
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
