<?php

namespace App\Http\Controllers;

use App\Models\Supply;
use Illuminate\Http\Request;

class SupplyController extends Controller
{
    public function index(Request $request)
    {
        // $items = Supply::paginate(10);
        // return response()->json([
        //     'status' => $items,
        // ]);
        $query = Supply::query();
        if ($request->search && $request->search != 'null') {
            $query->where('barcode', '=', $request->search);
                // ->orWhere(function ($q) use ($request) {
                //     $q->orWhereHas('item', function ($q) use ($request) {
                //         // Search by barcode in the related item table
                //         $q->where('barcode', '=', $request->search);
                //     });
                // });
        }
    
        // $query->orderByDesc('status');
        $query->orderBy('quantity', 'asc');
        $receives = $query->paginate(10);
        return response()->json([
            'status' => $receives,
        ], 200);
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
