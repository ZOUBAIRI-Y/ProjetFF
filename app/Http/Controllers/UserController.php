<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $this->authorize('viewAll', auth()->user());
        $users = User::paginate();
        $collection = new UserCollection($users);

        return $collection;
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {

        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        $this->authorize('view', $user);

        $user->with(["properties", "likes"]);

        $userResource = new UserResource($user);
        return response()->json(['data' => $userResource]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $this->authorize('create', User::class);

        $validated = request()->validate([
            'firstname' => 'required|min:2|max:15',
            'lastname' => 'required|min:2|max:15',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            "firstname" => $validated["firstname"],
            "lastname" => $validated["lastname"],
            "email" => $validated["email"],
            "password" => Hash::make($validated["password"])
        ]);


        $userResource = new UserResource($user);

        return response()->json(["data" => $userResource], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }


        $this->authorize('update', $user);


        $user->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        $this->authorize('delete', $user);


        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
    public function upload(Request $request, $id)
    {

        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        $this->authorize('update', $user);

        $validated = $request->validate([
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $path = "";
        if ($request->hasFile('image')) {
            $image = $request->file("image");
            $path = "/storage/" . $image->store("users", 'public');
        }


        $user->avatar = $path;
        $user->save();

        return response()->json(['message' => 'Image uploaded successfully'], 200);
    }

    public function updatePassword(Request $request, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $this->authorize('update', $user);

        $validated = $request->validate([
            'old_password' => 'required',
            'password' => 'required|min:8|confirmed',
        ]);


        if (!Hash::check($validated['old_password'], $user->password)) {
            return response()->json(['message' => 'Invalid old password'], 401);
        }

        $user->password = Hash::make($validated['password']);
        $user->save();

        return response()->json(['message' => 'Password updated successfully']);
    }
    public function likedProperties($userId)
    {
        $user = User::findOrFail($userId);

        $likedProperties = $user->likes()->with('property')->get();

        return response()->json(['data' => $likedProperties]);
    }
}
