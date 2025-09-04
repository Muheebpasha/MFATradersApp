<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('adminModule.home'); // create resources/views/home.blade.php
    }
}
