<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\LessorCollection;
use App\Http\Resources\LessorResource;
use App\Models\User;

class LessorController extends Controller
{
    public function index()
    {
        $users = User::withCount('reviews')
            ->with(['likes', 'reviews', 'comments', 'properties'])
            ->where('role', '!=', 'admin')
            ->orderByDesc('reviews_count')
            ->paginate(6);

        $collection = new LessorCollection($users);

        return $collection;
    }

    public function show($id)
    {
        $user = User::with(['likes', 'reviews', 'comments', 'properties'])
            ->find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $userResource = new LessorResource($user);
        return response()->json(['data' => $userResource]);
    }
}
