<?php
namespace App\Http\Controllers;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;
// use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('News', [
            'news' => News::all()
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
            'title' => 'required',
            'description' => 'required',
        ]);

        $news = new News();
        $news->title = $request->title;
        $news->description = $request->description;
        $news->save();

        return redirect()->back();
    }

    // public function store(Request $request)
    // {
    //     Validator::make($request->all(), [
    //         'title' => ['required'],
    //         'date' => ['required'],
    //         'decription' => ['required'],
    //     ])->validate();
  
    //     News::create($request->all());
  
    //     return redirect()->back()
    //                 ->with('message', 'Post Created Successfully.');
    // }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return News::find($id); 
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
            'title' => 'required',
            'description' => 'required',
        ]);

        $news = News::find($id);
        $news->title = $request->title;
        $news->description = $request->description;
        $news->save();

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
            News::find($request->input('id'))->delete();
            return redirect()->back();
        }
    }

    // public function destroy(Request $request)
    // {
    //     if ($request->has('id')) {
    //         News::find($request->input('id'))->delete();
    //         return redirect()->back();
    //     }
    // }
}
