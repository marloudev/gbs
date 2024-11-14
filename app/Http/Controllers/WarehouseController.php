<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use Illuminate\Http\Request;

class WarehouseController extends Controller
{
    public function index(Request $request)
    {
        $items = Warehouse::paginate(10);
        return response()->json([
            'status' => $items,
        ]);
    }
}
