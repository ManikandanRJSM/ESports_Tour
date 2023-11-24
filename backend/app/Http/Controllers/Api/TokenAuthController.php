<?php

namespace App\Http\Controllers\Api;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TokenAuthController extends Controller{

    public function register(Request $request){
        dd($request->all());
    }
}