<?php

use App\Models\News;
use App\Models\Room;
use App\Models\Post;
use App\Models\User;
use App\Models\Message;
use App\Models\StudentsInRooms;
use App\Models\Payment;

use Illuminate\Support\Facades\Auth;


use App\Http\Controllers\PostsController;
use App\Models\Roomrequest;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/dashboard');

    // return Inertia::render('Welcome', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified'])->get('/news', function () {
    return Inertia::render('News');
})->name('news');

// Route::middleware(['auth:sanctum', 'verified'])->get('/rooms', function () {
//     return Inertia::render('Rooms');
// })->name('rooms');

Route::middleware(['auth:sanctum', 'verified'])->get('/myroom', function () {
    return Inertia::render('MyRoom',[
        'userinfo' => User::where('id',Auth::id())->with('rooms', 'payments')->first()->toArray()
    ]);
})->name('myroom');



Route::middleware(['auth:sanctum', 'verified'])->get('/sharenews', function () {
    return Inertia::render('ShareNews', [
        'news' => News::all()
    ]);
})->name('sharenews');



Route::middleware(['auth:sanctum', 'verified'])->get('/sharerooms', function () {
    return Inertia::render('ShareRooms',  [
        'rooms' => Room::withCount('users')->get()->toArray(),
    ]);
})->name('sharerooms');

Route::middleware(['auth:sanctum', 'verified'])->get('/posts', function () {
    return Inertia::render('Posts',  [
        'posts' => Post::all()
    ]);
})->name('posts');


// Route::middleware(['auth:sanctum', 'verified'])->get('/payments', function () {
//     return Inertia::render('Payments');
// })->name('payments');

Route::middleware(['auth:sanctum', 'verified'])->get('/personnelmessages', function () {
    return Inertia::render('PersonnelMessages');
})->name('personnelmessages');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::resource('news', 'App\Http\Controllers\NewsController');

Route::resource('rooms', 'App\Http\Controllers\RoomsController');

Route::resource('messages', 'App\Http\Controllers\MessagesController'); //bunu mutlaka ekle

// Route::resource('personnelmessages', 'App\Http\Controllers\PersonnelMessagesController'); //bunu mutlaka ekle

Route::resource('studentsinrooms', 'App\Http\Controllers\StudentsInRoomsController'); //bunu mutlaka ekle

Route::resource('roomrequests', 'App\Http\Controllers\RoomrequestsController'); //bunu mutlaka ekle

Route::resource('payments', 'App\Http\Controllers\PaymentsController'); //bunu mutlaka ekle


// Route::resource('posts', PostController::class);

Route::resource('posts', 'App\Http\Controllers\PostsController');

Route::middleware(['auth:sanctum', 'verified'])->get('/posts', function () {
    return Inertia::render('Posts', [
        'posts' => Post::all()
    ]);
})->name('posts');


Route::middleware(['auth:sanctum', 'verified'])->get('/messages', function () {
    return Inertia::render('Messages', [
        'messages' => Message::all(),
        'users' => User::all()
    ]);
})->name('messages');


Route::middleware(['auth:sanctum', 'verified'])->get('/personnelmessages', function () {
    return Inertia::render('PersonnelMessages', [
        'messages' => Message::all(),
        'users' => User::all()
    ]);
})->name('personnelmessages');



// Route::middleware(['auth:sanctum', 'verified'])->get('/studentsinrooms', function () {
//     return Inertia::render('Studentsinrooms', [
//         'studentsinrooms' => Studentsinrooms::all(),
//         'users' => User::all(),
//         'rooms' => Room::all(),
//         'roomrequests' => Roomrequest::all(),
//         'payments' => Payment::all()

//     ]);
// })->name('studentsinrooms');

// Route::middleware(['auth:sanctum', 'verified'])->get('/roomrequests', function () {
//     return Inertia::render('RoomRequests',  [
//         'rooms' => Room::all(),
//         'roomrequests' => Roomrequest::all()
//     ]);
// })->name('roomrequests');


// Route::middleware(['auth:sanctum', 'verified'])->get('/payments', function () {
//     return Inertia::render('Payments', [
//         'payments' => Payment::all()
//     ]);
// })->name('payments');