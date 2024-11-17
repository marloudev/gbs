<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Models\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AccountDetailsController extends Controller
{

    public function index(Request $request)
    {
        $cashier = User::findOrFail($request->cashier_id);

        // Calculate sales grouped by date for the current year
        $dailySales = $cashier->account()
            ->selectRaw('DATE(created_at) as sale_date, SUM(total) as daily_total')
            ->whereYear('created_at', Carbon::now()->year) // Filter by current year
            ->groupBy('sale_date')
            ->orderBy('sale_date', 'desc') // Order by latest date
            ->get();

        // Return the result as JSON
        return response()->json([
            'status' => 'success',
            'data' => [
                'cashier' => $cashier->only(['id', 'name', 'email']),
                'daily_sales' => $dailySales,
            ],
        ], 200);
    }

}
