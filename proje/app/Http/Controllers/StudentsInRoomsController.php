<?php

namespace App\Http\Controllers;
use App\Models\StudentsInRooms;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class StudentsInRoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('StudentsInRooms', [
            'studentsinrooms' => StudentsInRooms::all()
        ]);
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
            'student_id' => 'required',
            'room_id' => 'required',
        ]);

        $studentsinrooms = new StudentsInRooms();
        $studentsinrooms->student_id = $request->student_id;
        $studentsinrooms->room_id = $request->room_id;
        $studentsinrooms->save();

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return StudentsInRooms::find($id);
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
            'student_id' => 'required',
            'room_id' => 'required',
        ]);

        $studentsinrooms = StudentsInRooms::find($id);
        $studentsinrooms->student_id = $request->student_id;
        $studentsinrooms->room_id = $request->room_id;
        $studentsinrooms->save();

        return response('Succesfully updated the message', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if ($request->has('id')) {
            StudentsInRooms::find($request->input('id'))->delete();
            return redirect()->back();
        }
    }
}
