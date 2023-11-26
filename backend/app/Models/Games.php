<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Games extends Model
{
    use HasFactory;

    protected $table = 'games';
    protected $appends = ['image'];

    public function getImageAttribute(){
        return public_path('images/games/'.$this->attribute['game_image']);
    }
}
