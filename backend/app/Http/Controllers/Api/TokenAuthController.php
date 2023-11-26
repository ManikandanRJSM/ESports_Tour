<?php

namespace App\Http\Controllers\Api;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserDetails;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Auth;
use JWTAuth;
// use Auth;
use Illuminate\Support\Facades\Auth;

class TokenAuthController extends Controller{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(Request $request){
        
        $user = new User();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->user_type = $request->user_type;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        $user_details = new UserDetails();
        $user_details->user_id = $user->id;
        $user_details->country_id = $request->country;
        $user_details->save();

        return response()->json([
            'status' => '1',
            'message' => 'Registered sucessfully'
        ]);
    }

    public function login(Request $request){
        $credentials = request(['email', 'password']);

        if (! $token = auth('api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }


    protected function respondWithToken($token)
    {
        $user = auth('api')->user();
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => [
                'uid' => $user->id,
                'f_l_name' => $user->first_name.' '.$user->last_name,
                'u_type' => $user->user_type,
            ]
        ]);
    }

    public function logout(Request $request){
        auth('api')->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
}