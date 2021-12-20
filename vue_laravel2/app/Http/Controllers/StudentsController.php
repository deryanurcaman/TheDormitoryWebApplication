<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Student::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'full_name' => 'required',
            'room' => 'requried',
            'date_of_enrolled' => 'required|date'
        ]);

        $student = new Student();
        $student->full_name = $request->full_name;
        $student->room = $request->room;
        $student->date_of_enrolled = $request->date_of_enrolled;

        $student->save();

        return response('Succesfully created a new Student', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Student::find($id); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'full_name' => 'required',
            'room' => 'requried',
            'date_of_enrolled' => 'required|date'
        ]);

        $student = Student::find($id);
        $student->full_name = $request->full_name;
        $student->room = $request->room;
        $student->date_of_enrolled = $request->date_of_enrolled;

        $student->save();

        return response('Succesfully updated the Student', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       Student::find($id)->delete();
       return response('Succesfully deleted the Student', 200);
    }
}
