<?php

use App\Models\News;
use App\Models\Room;
use App\Models\Post;
use App\Http\Controllers\PostsController;

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


Route::middleware(['auth:sanctum', 'verified'])->get('/rooms', function () {
    return Inertia::render('Rooms');
})->name('rooms');

Route::middleware(['auth:sanctum', 'verified'])->get('/changerequest', function () {
    return Inertia::render('ChangeRequest');
})->name('changerequest');

Route::middleware(['auth:sanctum', 'verified'])->get('/myroom', function () {
    return Inertia::render('MyRoom');
})->name('myroom');

Route::middleware(['auth:sanctum', 'verified'])->get('/messages', function () {
    return Inertia::render('Messages');
})->name('messages');

Route::middleware(['auth:sanctum', 'verified'])->get('/sharenews', function () {
    return Inertia::render('ShareNews', [
        'news' => News::all()
    ]);
})->name('sharenews');

Route::middleware(['auth:sanctum', 'verified'])->get('/studentsinrooms', function () {
    return Inertia::render('StudentsInRooms');
})->name('studentsinrooms');

Route::middleware(['auth:sanctum', 'verified'])->get('/sharerooms', function () {
    return Inertia::render('ShareRooms',  [
        'rooms' => Room::all()
    ]);
})->name('sharerooms');

Route::middleware(['auth:sanctum', 'verified'])->get('/posts', function () {
    return Inertia::render('Posts',  [
        'posts' => Post::all()
    ]);
})->name('posts');


Route::middleware(['auth:sanctum', 'verified'])->get('/payments', function () {
    return Inertia::render('Payments');
})->name('payments');

Route::middleware(['auth:sanctum', 'verified'])->get('/personnelmessages', function () {
    return Inertia::render('PersonnelMessages');
})->name('personnelmessages');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::resource('news', 'App\Http\Controllers\NewsController');

Route::resource('rooms', 'App\Http\Controllers\RoomsController');

// Route::resource('posts', PostController::class);

Route::resource('posts', 'App\Http\Controllers\PostsController');

Route::middleware(['auth:sanctum', 'verified'])->get('/posts', function () {
    return Inertia::render('Posts', [
        'posts' => Post::all()
    ]);
})->name('posts');

