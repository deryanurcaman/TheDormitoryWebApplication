<?php

namespace App\Http\Controllers;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Messages', [
            'messages' => Message::all()
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
            'content' => 'required',
            'receiver' => 'required',
            'sender' => 'required',
        ]);

        $message = new Message();
        $message->content = $request->content;
        $message->receiver = $request->receiver;
        $message->sender = $request->sender;
        $message->save();

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
    public function destroy(Request $request)
    {
        if ($request->has('id')) {
            Message::find($request->input('id'))->delete();
            return redirect()->back();
        }
    }
}
