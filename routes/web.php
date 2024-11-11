<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('*', function () {
    return Inertia::render('pages/error');
})->name('error');

Route::middleware('redirectBasedOnRole')->get('/', function () {
    return Inertia::render('pages/login/page');
})->name('login.form');


Route::middleware('auth:sanctum')->prefix('administrator')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('pages/administrator/dashboard/page');
    })->name('dashboard');

    Route::get('/sales', function () {
        return Inertia::render('pages/administrator/sales/page');
    })->name('sales');

    Route::get('/products', function () {
        return Inertia::render('pages/administrator/products/page');
    })->name('products');
    
    Route::get('/loyalty_card', function () {
        return Inertia::render('pages/administrator/loyalty_card/page');
    })->name('loyalty_card');

    Route::get('/accounts', function () {
        return Inertia::render('pages/administrator/accounts/page');
    })->name('accounts');

    Route::get('/accounts/{accountid}', function () {
        return Inertia::render('pages/administrator/accounts/details/page');
    })->name('accounts.details');

    Route::get('/settings', function () {
        return Inertia::render('pages/administrator/settings/page');
    })->name('settings');

    
});

Route::get('/barcode', function () {
    return Inertia::render('pages/administrator/barcode/page');
})->name('barcode');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth:sanctum')->prefix('cashier')->group(function () {
    Route::get('/', function () {
        return Inertia::render('pages/cashier/page');
    })->name('cashier');
    Route::get('/search', function () {
        return Inertia::render('pages/search/page');
    })->name('cashier.search');
});

require __DIR__.'/auth.php';
