<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;

    protected $table = 'events';

    public function games(){
        return $this->belongsTo('App\Models\Games','g_id','id');
    }

    public function getImageAttribute(){
        return public_path('images/games/'.$this->attribute['game_image']);
    }
}
