<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Sales;
use App\Models\SalesItem;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    public function index(Request $request)
    {
        $perPage = 10;
        $searchTerm = $request->input('search');

        // Perform the search query
        $products = Sales::where('receipt_id', 'like', "%$searchTerm%")->with(['sales_item'])->orderBy('created_at', 'desc')
            ->paginate($perPage);

        // Return the search results
        return response()->json([
            'status' => 'status',
            'data' => $products
        ]);
    }


    public function store(Request $request)
    {
        $sales = Sales::create($request->payment);
        foreach ($request->cart as $value) {
            if (env('APP_ENV') == 'production') {
                $product = Product::where('id', '=', $value['product']['id'])->first();
                $product->update([
                    'quantity' => $product->quantity - $value['quantity']
                ]);
            }
            SalesItem::create([
                'sales_id' => $sales->id,
                'product_id' => $value['product']['id'],
                'quantity' => $value['quantity'],
                'price' => $value['price'],
            ]);
        }

        return response()->json([
            'status' => 'success',
        ], 200);
    }
}
