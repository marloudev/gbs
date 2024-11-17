<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Receive;
use App\Models\Supply;
use App\Models\Warehouse;
use Illuminate\Http\Request;

class ReceiveController extends Controller
{


    public function store(Request $request)
    {
        $receives = Receive::create([
            'item_id' => $request->item_id,
            'quantity' => $request->quantity,
            'total_quantity' => $request->total_quantity,
            'status' => 'Pending',
            'item_count' => $request->item_count
        ]);
        return response()->json([
            'status' => 'success',
        ]);
    }

    public function destroy($id)
    {
        Receive::where('id', $id)->delete();
        return response()->json([
            'status' => 'success',
        ], 200);
    }
    public function index(Request $request)
    {
        $query = Receive::with(['item_products', 'item']);
        if ($request->search && $request->search != 'null') {
            $query->where('item_id', '=', $request->search)
                ->orWhere(function ($q) use ($request) {
                    $q->orWhereHas('item', function ($q) use ($request) {
                        // Search by barcode in the related item table
                        $q->where('barcode', '=', $request->search);
                    });
                });
        }
    
        $query->orderByDesc('created_at');
        $loanRecords = $query->paginate(10);
        return response()->json([
            'status' => $loanRecords,
        ], 200);
    }
    


    public function change_status(Request $request)
    {
        // $products = $request->item_products;
        // foreach ($products as $key => $product) {
        //     $product = Product::where('barcode',$product['barcode'])->first();
        //     if ($product) {
        //         $product->update([

        //         ]);
        //     }
        // }
        Receive::where('id', $request->id)->update([
            'status' => $request->status
        ]);
        if ($request->status == 'Received') {
            //add warehouse
            $warehouse = Warehouse::where('barcode', $request->item['barcode'])->first();
            if ($warehouse) {
                $warehouse->update([
                    'quantity' => $warehouse->quantity + $request->total_quantity,
                ]);
            } else {
                Warehouse::create([
                    'barcode' => $request->item['barcode'],
                    'brand' => $request->item['name'],
                    'description' => $request->item['description'],
                    'uom' => $request->item['uom'],
                    'quantity' => $request->total_quantity,
                ]);
            }
        }

        return response()->json([
            'status' => '$receives',
        ]);
    }

    public function pullout_item(Request $request)
    {
        $warehouse = Warehouse::where('barcode', $request->barcode)->first();
        $supply = Supply::where('barcode', $request->barcode)->first();

        if (!$request->has('pullout_count') || $request->pullout_count <= 0) {
            return response()->json(['status' => 'error', 'message' => 'Invalid pullout count'], 400);
        }

        $pulloutCount = $request->pullout_count;

        if ($supply) {
            $supply->update([
                'quantity' => $supply->quantity + $pulloutCount
            ]);
        }

        if ($warehouse) {
            $newQuantity = $warehouse->quantity - $pulloutCount;
            if ($newQuantity >= 0) {
                $warehouse->update([
                    'quantity' => $newQuantity
                ]);
            } else {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Insufficient quantity in warehouse'
                ], 400);
            }
        }

        return response()->json([
            'status' => 'success',
        ]);
    }
}
