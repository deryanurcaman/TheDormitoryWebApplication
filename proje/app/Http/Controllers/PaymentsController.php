<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;


class PaymentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Payments', [
            'payments' => Payment::with('room', 'user')->get()->toArray(),
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
        dd($request->con);
        $this->validate($request, [
            'student_id' => 'required',
            'room_id' => 'required',
            'status' => 'required'
        ]);

        $payments = new Payment();
        $payments->student_id = $request->student_id;
        $payments->room_id = $request->room_id;
        $payments->status = $request->status;
        $payments->save();

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
        return Payment::find($id);
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
            'status' => 'required'
        ]);
        $payments = Payment::find($id);

        if($request->cashByHand == false)
            $payments->status = "Waiting";

        elseif($request->cashByHand)
            $payments->status ="Successful";

    
        $payments->save();
        return redirect()->back();
    }

    // public function update(Request $request, $id)
    // {
    //     error_log("updateN e girdi");
    //     $this->validate($request, [
    //         'status' => 'required'
    //     ]);

    //     $payments = Payment::find($id);
    //     $payments->status = "Successful";
    //     $payments->save();

    //     return redirect()->back();
    // }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if ($request->has('id')) {
            Payment::find($request->input('id'))->delete();
            return redirect()->back();
        }
    }
}
