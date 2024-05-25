<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyCollection;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use App\Filters\PropertyFilter;
use App\Http\Requests\CreatePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Http\Resources\LikeCollection;
use App\Models\Like;
use App\Models\User;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    public function index(Request $request)
    {
        $filter = new PropertyFilter();
        $queryItems = $filter->transform($request);
        $properties = Property::with('likes', 'reviews', 'comments')
            ->where($queryItems)
            ->orderByDesc('updated_at')
            ->paginate();
        return new PropertyCollection($properties->appends($request->query()));
    }

    public function show($id)
    {
        $property = Property::with('likes', 'reviews', 'comments')
            ->findOrFail($id);
        return response()->json(['data' => new PropertyResource($property)]);
    }

    public function store(CreatePropertyRequest $request)
    {
        $propertyData = $request->all();
        $propertyData['user_id'] = auth()->user()->id;
        $property = Property::create($propertyData);
        return response()->json(["data" => new PropertyResource($property)], 201);
    }

    public function update(UpdatePropertyRequest $request, $id)
    {
        $property = Property::findOrFail($id);
        $this->authorize('update', $property);
        $property->update($request->all());
        return response()->json(['message' => 'Property updated']);
    }

    public function destroy($id)
    {
        $property = Property::findOrFail($id);
        $this->authorize('delete', $property);
        $property->delete();
        return response()->json(['message' => 'Property deleted']);
    }

    public function upload(Request $request, $id)
    {
        $property = Property::findOrFail($id);
        $this->authorize('update', $property);
        $request->validate([
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        $paths = [];
        if ($request->hasFile('images')) {
            $images = $request->file('images');
            foreach ($images as $image) {
                $path = $image->store("properties", 'public');
                array_push($paths, "/storage/" . $path);
            }
        }
        $property->images = json_encode($paths);
        $property->save();
        return response()->json(['message' => 'Images uploaded successfully'], 200);
    }

    public function like($id)
    {
        $user = auth()->user();
        $property = Property::findOrFail($id);

        if ($user->likes()->where('property_id', $property->id)->exists()) {
            return response()->json(['error' => 'property already liked.'], 400);
        }

        $like = new Like();
        $like->user_id = $user->id;
        $like->property_id = $property->id;
        $like->save();

        return response()->json(['message' => 'property liked.'], 201);
    }

    public function unlike($id)
    {
        $user = auth()->user();
        $property = Property::findOrFail($id);
        $like = Like::where('user_id', $user->id)->where('property_id', $id)->first();

        if (!$like) {
            return response()->json(['error' => 'property was not liked.'], 400);
        }

        $like->delete();
        return response()->json(['message' => 'property unliked.'], 200);
    }

    public function likes($id)
    {
        $property = Property::findOrFail($id);
        $likes = $property->likes()->paginate(10);

        return new LikeCollection($likes);
    }

    public function liked($userId)
    {
        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $likedProperties = $user->likes()->with('property')->paginate(10);

        $likeData = $likedProperties->map(function ($like) {
            return [
                'id' => $like->id,
                'property' => new PropertyResource($like->property),
                'userId' => $like->user_id,
                'createdAt' => $like->created_at,
                'updatedAt' => $like->updated_at,
            ];
        });

        return response()->json($likeData);
    }
    public function search($term)
    {
        $properties = Property::whereHas('user', function ($query) use ($term) {
            $query->where('name', 'LIKE', "%$term%");
        })->orWhereHas('city', function ($query) use ($term) {
            $query->where('name', 'LIKE', "%$term%");
        })->orderByDesc('updated_at')->paginate();

        $collection = new PropertyCollection($properties);
        return $collection;
    }
}
