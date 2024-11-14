<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function get_cart($receipt_id)
    {
        $carts = Cart::where('receipt_id', $receipt_id)->with('product')->orderBy('id', 'DESC')->get();
        return response()->json([
            'status' => 'status',
            'data' => $carts
        ]);
    }

    public function index(Request $request)
    {
        $perPage = 20;
        $searchTerm = $request->input('search');

        // Perform the search query
        $carts = Cart::where('barcode', 'like', '%' . $searchTerm . '%')
            ->orWhere('description', 'like', '%' . $searchTerm . '%')
            ->paginate($perPage);

        // Return the search results
        return response()->json([
            'status' => 'status',
            'data' => $carts
        ]);
    }

    public function show($id)
    {

        $carts = Cart::where('barcode', '=', $id)->first();
        return response()->json([
            'status' => $carts == null ? 'Not Found!' : 'success',
            'data' => $carts
        ]);
    }
    public function store(Request $request)
    {

        Cart::create($request->validate([
            'receipt_id' => 'required',
            'barcode' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'randomId' => 'required',
            'total' => 'required',
            'supply_barcode' => 'required',
            'capital' => 'required',
        ]));

        return response()->json([
            'status' => 'success',
            'data' => $this->get_cart($request->receipt_id)->original['data']
        ], 200);
    }

    public function update(Request $request, $id)
    {

        $cart = Cart::find($id);
        $cart->update([
            'quantity' => $request->quantity,
            'total' => $request->total,
        ]);
        return response()->json([
            'status' => 'success',
            'data' => $this->get_cart($cart->receipt_id)->original['data']
        ], 200);
    }

    public function destroy($id)
    {
        $cart = Cart::find($id);
        $cart->delete();
        return response()->json([
            'status' => 'success',
            'data' => $this->get_cart($cart->receipt_id)->original['data']
        ], 200);
    }
}
