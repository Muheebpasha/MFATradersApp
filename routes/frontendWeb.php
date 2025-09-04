<?php

use App\Http\Controllers\FrontendController;
use Illuminate\Support\Facades\Route;


Route::get('/', [FrontendController::class, 'index']);
Route::get('/about-us',[FrontendController::class, 'aboutUs']);
Route::get('/contact-us',[FrontendController::class, 'contactUs']);
Route::get('/our-services',[FrontendController::class,'ourServices']);
Route::get('/trading-corporation',[FrontendController::class,'tradingCorp']);
Route::get('/garments',[FrontendController::class,'garments']);
Route::get('/catering-and-hospitality',[FrontendController::class,'cateringAndHospitality']);