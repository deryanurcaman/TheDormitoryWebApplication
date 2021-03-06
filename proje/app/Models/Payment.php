<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;



    //for the relationship between the tables

    public function user()
    {
        return $this->belongsTo(User::class, 'student_id');
    }
    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}
