<?php

namespace App\Http\Controllers\Api;

use App;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Games;

class GameController extends Controller{

    public function playGames(Request $request){
        $games = Games::get()->map(function($game) {
            return [
                'g_id' => $game->id,
                'name' => $game->name,
                'g_image' =>  url('images/games/'.$game->game_image),
            ];
        });
        return response()->json($games);
    }
}