<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CityResource;
use App\Models\City;
use Illuminate\Http\Request;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $res = CityResource::collection(City::paginate(8));
        return response()->json(["data" => $res], 200);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->authorize('create');

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $city = City::create($validatedData);
        $res = new CityResource($city);

        return response()->json($res, 201);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $city = City::find($id);
        $this->authorize('update');

        if (!$city) {
            return response()->json(['error' => 'city non trouvee'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $city->update($validatedData);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $city = City::find($id);
        $this->authorize('delete');
        if (!$city) {
            return response()->json(['error' => 'city non trouvee'], 404);
        }


        $city->delete();

        return response()->json(['message' => 'city supprimer']);
    }
}
