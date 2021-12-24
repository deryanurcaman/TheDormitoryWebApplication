<?php

use App\Http\Controllers\RoomsController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\MessagesController;
use App\Http\Controllers\PaymentsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::apiResource('rooms', 'App\Http\Controllers\RoomsController');
// Route::apiResource('news', 'App\Http\Controllers\NewsController');
// Route::apiResource('messages', 'App\Http\Controllers\MessagesController');
// Route::apiResource('payments', 'App\Http\Controllers\PaymentsController');