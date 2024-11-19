<?php

namespace App\Http\Controllers;

use App\Models\Supply;
use Illuminate\Http\Request;

class SupplyController extends Controller
{
    public function index(Request $request)
    {
        $items = Supply::paginate(10);
        return response()->json([
            'status' => $items,
        ]);
    }

    public function update(Request $request, $id)
    {

        Supply::where('id', $id)->update($request->validate([
            'barcode' => 'required',
            'description' => 'required',
            'quantity' => 'required',
        ]));
        return response()->json([
            'status' => 'success',
        ], 200);
    }
}
