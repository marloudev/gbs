<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\ItemProduct;
use App\Models\Supply;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function csvContent(Request $request)
    {
        foreach ($request->data as $value) {
            $barcode = $value['barcode'];
            $description = $value['description'];
            $quantity = $value['quantity'];

            // Check if item exists, if not, create a new one
            $item = Item::firstOrCreate(
                ['barcode' => $barcode],
                [
                    'description' => $description,
                    'uom' => 'Each',
                    'capital' => '0',
                    'quantity' => $quantity,
                ]
            );

            // Check if item product exists, if not, create a new one
            $itemProduct = ItemProduct::firstOrCreate(
                ['barcode' => $barcode],
                [
                    'description' => $description,
                    'uom' => 'Each',
                    'capital' => '0',
                    'quantity' => $quantity,
                ]
            );

            // Check if supply exists, if not, create a new one
            $supply = Supply::firstOrCreate(
                ['barcode' => $barcode],
                [
                    'description' => $description,
                    'uom' => 'Each',
                    'quantity' => $quantity,
                ]
            );
        }

        return response()->json($request->all());
    }
}
