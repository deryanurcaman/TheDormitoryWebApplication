<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studentsinrooms extends Model
{
    use HasFactory;



    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'student_id', 'room_id'
    ];



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
