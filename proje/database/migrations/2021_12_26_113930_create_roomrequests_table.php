<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoomrequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::create('roomrequests', function (Blueprint $table) {
                $table->increments('id');
                $table->string('type'); 
                $table->string('comment'); 
                $table->unsignedInteger('student_id'); 
                $table->unsignedInteger('request_room'); 
                $table->foreign('student_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
                    
                $table->foreign('request_room')
                    ->references('id')
                    ->on('rooms')
                    ->onDelete('cascade');
                $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roomrequests');
    }
}
