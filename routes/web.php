<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\SliderController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/dashboard', [HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/home', [HomeController::class, 'index'])->name('home');

     
    Route::prefix('/adminusers')->group(function () {
        Route::get('/',[AdminUserController::class,'index'])->name('adminusers.index');
        Route::get('/autosuggest',[AdminUserController::class,'autosuggestion']);
        Route::get('/create',[AdminUserController::class,'create'])->name('adminusers.create');
        Route::post('/store',[AdminUserController::class,'store']);
        Route::get('/edit/{id}',[AdminUserController::class,'edit']);
        Route::put('/update/{id}',[AdminUserController::class,'update']);
        Route::get('/change-password/{id}',[AdminUserController::class,'changePassword']);
        Route::patch('/update-password/{id}', [AdminUserController::class, 'updatePassword']);
        Route::get('/search',[AdminUserController::class,'search']);
        Route::put('/updateStatus/{id}', [AdminUserController::class,'updateStatus'])->name('adminusers.updateStatus');
        Route::get('/module-permission',[AdminUserController::class,'modulesPermission'])->name('adminusers.modulesPermission');
        Route::get('/user-permission-list',[AdminUserController::class,'userPermissionList']);
        Route::get('/add-user-permission',[AdminUserController::class,'addUserPermission']);
        Route::post('/store-user-permission',[AdminUserController::class,'storeUserPermission']);
        Route::patch('/remove-user-module',[AdminUserController::class,'removeUserModule']);
        Route::get('/edit-user-permission/{id}',[AdminUserController::class,'editUserPermission']);
        Route::put('/update-user-permission/{id}',[AdminUserController::class, 'updateUserPermission']);
        Route::delete('/delete-user-permission/{id}',[AdminUserController::class,'deleteUserPermission']);
        Route::get('/modules',[AdminUserController::class,'adminModules'])->name('adminusers.modules');
        Route::get('/module-list',[AdminUserController::class, 'moduleList']);
        Route::get('/add-module',[AdminUserController::class,'addModule']);
        Route::post('/save-module',[AdminUserController::class,'saveModule']);
        Route::get('/edit-module/{id}',[AdminUserController::class,'editModule']);
        Route::put('/update-module/{id}',[AdminUserController::class,'updateModule']);
        Route::delete('/delete-module/{id}',[AdminUserController::class,'deleteModule']);
    });
   
    Route::resource('sliders', SliderController::class);

});

require __DIR__.'/auth.php';
