<?php

use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\LanguageController;
use App\Http\Controllers\API\ImageController;
use App\Http\Controllers\MailController;
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

Route::get('projects', [ProjectController::class, 'index']);
Route::post('/add-project', [ProjectController::class, 'store']);

Route::get('categories', [CategoryController::class, 'index']);
Route::post('/add-category', [CategoryController::class, 'store']);

Route::get('languages', [LanguageController::class, 'index']);
Route::post('/add-language', [LanguageController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('images', [ImageController::class, 'upload']);

Route::post('send-mail', [MailController::class, 'index']);

Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
});