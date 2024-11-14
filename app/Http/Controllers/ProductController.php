<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProducts()
    {

        $products = Product::limit(20)->get();
    
        return response()->json([
            'status' => 'status',
            'data' => $products
        ]);
    }

    public function index(Request $request)
    {
        $perPage = 10;
        $searchTerm = $request->input('search');

        // Perform the search query
        $products = Product::where('barcode', 'like', '%' . $searchTerm . '%')
            ->orWhere('description', 'like', '%' . $searchTerm . '%')
            ->paginate($perPage);

        // Return the search results
        return response()->json([
            'status' => 'status',
            'data' => $products
        ]);
    }

    public function show($id)
    {

        $products = Product::where('barcode', '=', $id)->with(['item_product'])
        ->orWhere('id', '=', $id)->first();
        return response()->json([
            'status' => $products == null ? 'Not Found!' : 'success',
            'data' => $products
        ]);
    }
    public function store(Request $request)
    {

        Product::create($request->validate([
            'barcode' => 'required|unique:products',
            'description' => 'required',
            'quantity' => 'required',
            'price' => 'required',
        ]));

        return response()->json([
            'status' => 'success',
            'data' => $this->getProducts()->original['data']
        ], 200);
    }

    public function update(Request $request, $id)
    {

        Product::where('id', $id)->update($request->validate([
            'barcode' => 'required',
            'description' => 'required',
            'quantity' => 'required',
            'price' => 'required',
        ]));
        return response()->json([
            'status' => 'success',
            'data' => $this->getProducts()->original['data']
        ], 200);
    }

    public function destroy($id)
    {
        Product::where('id', $id)->delete();
        return response()->json([
            'status' => 'success',
            'data' => $this->getProducts()->original['data']
        ], 200);
    }
}
