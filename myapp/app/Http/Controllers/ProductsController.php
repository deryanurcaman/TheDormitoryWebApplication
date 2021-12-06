<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index(){
        $title="Welcome to laravel 8";
        $description = "Created by me";

        return view('products.index', 
        compact('title', 'description'));

        // return view('products.index')->with('title',$title);
    }


    public function about(){
        return 'About Us Page';
    }

    public function show($name){
        $data = [
            'iphone' => 'iPhone',
            'samsung' => 'Samsung'
        ];

        return view('products.index', [
            'products' => $data[$name] ?? 'Product ' . $name . ' does not exist.'
        ]);


    }
}
