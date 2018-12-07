<?php

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

Route::get('/', function () {
    return view('welcome');
});
 
Route::post('/create/user', ['uses' => 'TestController@createUser', 'as' => 'createUser']);
Route::get('/list/user/{per?}/{page?}', ['uses' => 'TestController@listUsers', 'as' => 'listUsers']);
Route::post('/user/delete', ['uses' => 'TestController@deleteUser', 'as' => 'deleteUser']);
