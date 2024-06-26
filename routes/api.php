<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CityController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LessorController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;

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



Route::post('/login', [AuthController::class, "login"])->name("login");
Route::post('/signup', [AuthController::class, "signup"]);

Route::get('/properties', [PropertyController::class, 'index']);
Route::get('/properties/{id}', [PropertyController::class, 'show']);
Route::get('/properties/{id}/likes', [PropertyController::class, 'likes']);

Route::get('/lessors', [LessorController::class, 'index']);
Route::get('/lessors/{id}', [LessorController::class, 'show']);
Route::get('/cities', [CityController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);

Route::group(["middleware" => ["auth:sanctum"]], function () {
  Route::post('/logout', [AuthController::class, "logout"]);
  Route::resource("/properties", PropertyController::class)->except(['create', "edit", "index", "show"]);
  Route::post('/properties/{id}/images', [PropertyController::class, "upload"]);
  Route::resource("/cities", CityController::class)->except(['index', "show", "edit", "create"]);
  Route::resource('/comments', CommentController::class)->except(["index", 'edit']);
  Route::resource("/categories", CategoryController::class)->except(['index', "show", "edit", "create"]);
  Route::resource("/users", UserController::class)->except(['create', "edit"]);
  Route::post('/users/{id}/images', [UserController::class, "upload"]);
  Route::post('/users/{id}/password', [UserController::class, 'modif_motpass']);
  Route::post('/properties/{id}/like', [PropertyController::class, 'like_prop']);
  Route::post('/properties/{id}/unlike', [PropertyController::class, 'propert_unlk']);
  Route::get('/properties/{id}/liked', [PropertyController::class, 'liks_prop_toutes']);
  Route::post('/reviews', [ReviewController::class, 'store']);
});
