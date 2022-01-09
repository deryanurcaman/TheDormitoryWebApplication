<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Room;
use App\Models\Roomrequest;
use App\Models\StudentsInRooms;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentsInRoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Inertia::render('Studentsinrooms', [
            'studentsinrooms' => StudentsInRooms::with('room', 'user')->get()->toArray(),
            'users' => User::all(),
            'rooms' => Room::all(),
            'roomrequests' => Roomrequest::with('room', 'user')->get()->toArray(),
            'payments' => Payment::all()
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
            'status' => ''
        ]);

        $studentsinrooms = new StudentsInRooms();
        $studentsinrooms->student_id = $request->student_id;
        $studentsinrooms->room_id = $request->room_id;
        $studentsinrooms->save();

        if ($request->withPayment) {
            $payments = new Payment();
            $payments->student_id = $request->student_id;
            $payments->room_id = $request->room_id;
            $payments->status = $request->status;
            $payments->save();
        }

        if ($request->has('did')) {
            Roomrequest::find($request->input('did'))->delete();
        }

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
        if ($request->change) {
            $roomrequests = Roomrequest::find($id);
            $studentsinrooms = StudentsInRooms::where('student_id', $roomrequests->student_id)->first();
            $studentsinrooms->room_id = $roomrequests->request_room;

            $roomrequests->delete();
            

        } else {
            $this->validate($request, [
                'student_id' => 'required',
                'room_id' => 'required',
            ]);
            $studentsinrooms = StudentsInRooms::find($id);
            $studentsinrooms->student_id = $request->student_id;
            $studentsinrooms->room_id = $request->room_id;
        }

        $studentsinrooms->save();

        return redirect()->back();
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
            $stInRooms = StudentsInRooms::find($request->input('id'));
            $stInRooms->delete();

            $room = Room::where('id', $stInRooms->room_id)->withCount('users')->first();
            $room->save();
            return redirect()->back();
        }
    }
}
