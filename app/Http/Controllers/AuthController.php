<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use \App\Models\User;

class AuthController extends Controller
{
    public function login()
    {
        $validated = request()->validate([
            "email" => "required|email",
            "password" => "required|min:8"
        ]);

        if (auth()->attempt($validated)) {
            $user = auth()->user();
            $token = $user->createToken('token')->plainTextToken;


            $userResource = new UserResource($user);
            return response()->json(["user" => $userResource, "token" => $token]);
        }
        return response($status = 401)->json(["message" => "invalid username or password"]);
    }
    public function signup()
    {
        $validated = request()->validate([
            "firstname" => "required|min:2|max:15",
            "lastname" => "required|min:2|max:15",
            "email" => "required|unique:users,email",
            "password" => "required|min:8|confirmed"
        ]);

        $user = User::create([
            "first_name" => $validated["firstname"],
            "last_name" => $validated["lastname"],
            "email" => $validated["email"],
            "password" => Hash::make($validated["password"])
        ]);

        $token = $user->createToken('token')->plainTextToken;

        $userResource = new UserResource($user);

        return response()->json(["user" => $userResource, "token" => $token]);
    }


    public function logout()
    {

        auth()->user()->tokens()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
