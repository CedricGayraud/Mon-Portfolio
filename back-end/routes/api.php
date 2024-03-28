<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\LanguageController;
use App\Http\Controllers\API\ImageController;
use App\Http\Controllers\MailController;
use Fruitcake\Cors\HandleCors;
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

Route::get('projects', [ProjectController::class, 'index']);
Route::post('/add-project', [ProjectController::class, 'store']);

Route::get('jobs', [JobController::class, 'index']);
Route::post('/add-job', [JobController::class, 'store']);

Route::get('categories', [CategoryController::class, 'index']);
Route::post('/add-category', [CategoryController::class, 'store']);

Route::get('languages', [LanguageController::class, 'index']);
Route::post('/add-language', [LanguageController::class, 'store']);

// Route::post('images', [ImageController::class, 'upload']);
Route::get('/project-images/{projectId}', [ImageController::class, 'ProjectImages']);

Route::middleware([HandleCors::class])->group(function () {
    Route::post('send-mail', [MailController::class, 'index']);
});

Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);

Route::group(['middleware'=>'api'],function(){
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);
});