<?php

use App\Http\Controllers\StringCalcController;
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

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dash', function () {
    return Inertia::render('Welcome');
})->middleware(['auth', 'verified'])->name('javascript');

Route::get('/javascript', function () {
    return Inertia::render('JsCalc');
})->middleware(['auth', 'verified'])->name('javascript');

Route::get('/php', [StringCalcController::class, 'index'])->middleware(['auth', 'verified'])->name('php');
Route::post('/php/calc', [StringCalcController::class, 'calculate'])->middleware(['auth', 'verified'])->name('php.calc');


require __DIR__.'/auth.php';
