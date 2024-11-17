<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    // public function index(Request $request)
    // {
    //     $items = Warehouse::paginate(10);
    //     return response()->json([
    //         'status' => $items,
    //     ]);
    // }
    public function index(Request $request)
    {
        $query = Warehouse::query();
        if ($request->search && $request->search != 'null') {
            $query->where('item_id', '=', $request->search)
                ->orWhere(function ($q) use ($request) {
                    $q->orWhere('barcode', '=', $request->search);
                });
        }

        $query->orderByDesc('created_at');
        $loanRecords = $query->paginate(10);
        return response()->json([
            'status' => $loanRecords,
        ], 200);
    }
}
