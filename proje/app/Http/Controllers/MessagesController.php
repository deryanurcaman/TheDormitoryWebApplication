<?php

namespace App\Http\Controllers;
use App\Models\Message;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Message::all();
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
            'content' => 'required',
            'receiver' => 'required',
            'sender' => 'required',
            'date' => 'required',
        ]);

        $message = new Message();
        $message->content = $request->content;
        $message->receiver = $request->receiver;
        $message->sender = $request->sender;
        $message->date = $request->date;
        $message->save();

        return response('Succesfully created a new message', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Message::find($id);
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
            'content' => 'required',
            'receiver' => 'required',
            'sender' => 'required',
            'date' => 'required',
        ]);

        $message = Message::find($id);
        $message->content = $request->content;
        $message->receiver = $request->receiver;
        $message->sender = $request->sender;
        $message->date = $request->date;
        $message->save();

        return response('Succesfully updated the message', 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Message::find($id)->delete();
        return response('Succesfully deleted the message', 200);
    }
}
