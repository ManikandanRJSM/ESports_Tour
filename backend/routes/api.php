<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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




Route::post('organiser/register', 'TokenAuthController@register');
Route::post('organiser/login', 'TokenAuthController@login');
Route::get('getCountries', 'HomeController@getCountries');

Route::get('playGames', 'GameController@playGames');
