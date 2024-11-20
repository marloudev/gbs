<?php

namespace App\Http\Controllers;

use App\Models\ItemProduct;
use Illuminate\Http\Request;

class ItemProductController extends Controller
{
    public function destroy($id)
    {
        $item = ItemProduct::where('id', $id)->first();
        if ($item) {
            $item->delete();
        }
        return response()->json([
            'status' => 'success',
        ], 200);
    }
}
