<?php

namespace App\Http\Controllers;
use App\Models\Room;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;



class RoomsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Rooms', [
            'rooms' => Room::all()
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
            'name' => 'required',
            'capacity' => 'required',
            'fee' => 'required',
        ]);

        $news = new Room();
        $news->name = $request->name;
        $news->capacity = $request->capacity;
        $news->fee = $request->fee;
        $news->save();

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
        return Room::find($id); 
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Validator::make($request->all(), [
            'name' => ['required'],
            'capacity' => ['required'],
            'fee' => ['required'],
        ])->validate();
  
        if ($request->has('id')) {
            Room::find($request->input('id'))->update($request->all());
            return redirect()->back()
                    ->with('message', 'Post Updated Successfully.');
        }
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
            Room::find($request->input('id'))->delete();
            return redirect()->back();
        }
    }
}
