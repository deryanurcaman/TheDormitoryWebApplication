<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'fee',
    ];


    //for the relationship between the tables

    public function users()
    {
        return $this->belongsToMany(User::class, 'studentsinrooms', 'room_id', 'student_id');
    }
}
