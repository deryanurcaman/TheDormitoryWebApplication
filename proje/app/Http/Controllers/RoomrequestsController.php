<?php
namespace App\Http\Controllers;
use App\Models\Roomrequest;
use App\Models\Room;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


use Illuminate\Http\Request;
use Inertia\Inertia;
// use Illuminate\Support\Facades\Validator;

class RoomrequestsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('RoomRequests', [
            'roomrequests' => Roomrequest::with('room', 'user')->get()->toArray(),
            'rooms' => Room::withCount('users')->get()->toArray(),
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
            'type' => 'required',
            'comment' => 'required',
            'request_room' => 'required',
        ]);

        $roomrequest = new Roomrequest();
        $roomrequest->student_id = $request->student_id;
        $roomrequest->type = $request->type;
        $roomrequest->comment = $request->comment;
        $roomrequest->request_room = $request->request_room;
        $roomrequest->save();

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
        return Roomrequest::find($id); 
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
            'type' => 'required',
            'comment' => 'required',
            'request_room' => 'required',
        ]);

        $roomrequest = Roomrequest::find($id);
        $roomrequest->student_id = $request->student_id;
        $roomrequest->type = $request->type;
        $roomrequest->comment = $request->comment;
        $roomrequest->request_room = $request->request_room;
        $roomrequest->save();

        return response('Succesfully updated the room', 200);
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
            Roomrequest::find($request->input('id'))->delete();
            return redirect()->back();
        }
    }

    // public function destroy(Request $request)
    // {
    //     if ($request->has('id')) {
    //         roomrequest::find($request->input('id'))->delete();
    //         return redirect()->back();
    //     }
    // }
}
