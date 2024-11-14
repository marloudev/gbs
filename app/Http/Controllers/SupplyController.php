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
    
}
