<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Commande;

class HomeController extends Controller
{
    function index(){

        return view("index");
    }
}
