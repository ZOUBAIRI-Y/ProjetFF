<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\PropertyCollection;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use App\Filters\PropertyFilter;
use App\Http\Requests\CreatePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

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
            $properties = Property::paginate();
            $collection = new PropertyCollection($properties);
            return $collection;
        } else {
            $properties = Property::where($queryItems)->paginate();
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

        $validated = $request->validate([
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);



        $paths = [];
        if ($request->hasFile('images')) {
            $imageCount = count($request->file('images'));

            if ($imageCount > 8) {
                return response()->json(['error' => 'You can upload a maximum of 8 images.'], 400);
            }
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
}
