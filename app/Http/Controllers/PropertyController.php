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
use Illuminate\Http\Client\Response as ClientResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Response;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new PropertyFilter();
        $queryItems = $filter->transform($request);
        if (count($queryItems) == 0) {
            $properties = Property::orderByDesc('updated_at')->paginate();
            $collection = new PropertyCollection($properties);
            return $collection;
        } else {
            $properties = Property::where($queryItems)->orderByDesc('updated_at')->paginate();
            $collection = new PropertyCollection($properties->appends($request->query()));
            return $collection;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {

        $property = Property::find($id);

        if (!$property) {
            return response()->json(['error' => 'property not found'], 404);
        }

        $propertyResource = new PropertyResource($property);
        return response()->json(['data' => $propertyResource]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreatePropertyRequest $request)
    {
        $property = Property::create($request->all());
        $propertyResource = new PropertyResource($property);
        return response()->json(["data" => $propertyResource], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertyRequest $request, $id)
    {
        $property = Property::find($id);
        $this->authorize('update', $property);

        if (!$property) {
            return response()->json(['error' => 'property not found'], 404);
        }
        $property->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $property = Property::find($id);
        $this->authorize('delete', $property);
        if (!$property) {
            return response()->json(['error' => 'property not found'], 404);
        }


        $property->delete();

        return response()->json(['message' => 'Property deleted']);
    }

    public function upload(Request $request, $id)
    {
        $property = Property::find($id);

        if (!$property) {
            return response()->json(['error' => 'property not found'], 404);
        }

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
        $property = Property::find($id);

        if (!$property) {
            return response()->json(['error' => 'property not found'], 404);
        }
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

        $property = Property::find($id);

        if (!$property) {
            return response()->json(['error' => 'property not found'], 404);
        }

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

        $likes = $property->likes;

        return new LikeCollection($likes);
    }
}
