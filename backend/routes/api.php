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


Route::post('/login', 'App\Http\Controllers\API\AuthController@login');
Route::post('/register', 'App\Http\Controllers\API\AuthController@register');

Route::post('/addClient', 'App\Http\Controllers\ClientController@addClient');
Route::post('/searchClient', 'App\Http\Controllers\ClientController@searchClient');

Route::post('/addNewPet', 'App\Http\Controllers\PetController@addNewPet');
Route::post('/selectedClientPet', 'App\Http\Controllers\PetController@selectedClientPet');

Route::post('/getGender', 'App\Http\Controllers\ItemController@getGender');
Route::post('/getAge', 'App\Http\Controllers\ItemController@getAge');
Route::post('/getSize', 'App\Http\Controllers\ItemController@getSize');
Route::post('/getBreed', 'App\Http\Controllers\ItemController@getBreed');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});