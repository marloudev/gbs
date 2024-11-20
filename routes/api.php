<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\AccountDetailsController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ItemProductController;
use App\Http\Controllers\LoyalCardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReceiveController;
use App\Http\Controllers\SalesController;
use App\Http\Controllers\SupplyController;
use App\Http\Controllers\WarehouseController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('products', ProductController::class);
Route::apiResource('sales', SalesController::class);
Route::apiResource('accounts', AccountController::class);
Route::apiResource('carts', CartController::class);
Route::get('/get_cart/{receipt_id}', [CartController::class, 'get_cart']);
Route::apiResource('change_account_password', AccountController::class);
Route::post('/change_account_password/{id}', [AccountController::class, 'change_account_password']);
Route::apiResource('analytics', AnalyticsController::class);
Route::apiResource('account_details', AccountDetailsController::class);
Route::apiResource('loyal_cards', LoyalCardController::class);
Route::apiResource('items', ItemController::class);
Route::apiResource('receives', ReceiveController::class);
Route::post('/change_status', [ReceiveController::class, 'change_status']);
Route::post('/pullout_item', [ReceiveController::class, 'pullout_item']);
Route::apiResource('warehouses', WarehouseController::class);
Route::apiResource('supplies', SupplyController::class);
Route::apiResource('item_product', ItemProductController::class);



Route::post('/csvContent', [DashboardController::class, 'csvContent']);


