<?php

namespace App\Http\Controllers\Api;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Country;

class HomeController extends Controller{

    public function getCountries(Request $request){
        $countries = Country::get()->map(function($country){
            return [
                'id' => $country['id'],
                'name' => $country['name'],
                'short_name' => $country['short_name'],
                'code' => $country['code'],
            ];
        });

        return response()->json($countries);
    }
}