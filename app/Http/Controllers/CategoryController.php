<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = CategoryResource::collection(Category::all());
        return response()->json(["data" => $categories], 200);
    }

    public function store(Request $request)
    {
        $this->authorize('create');

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category = Category::create($validatedData);
        $res = new CategoryResource($category);

        return response()->json($res, 201);
    }

    public function update(Request $request, string $id)
    {
        $category = Category::findOrFail($id);
        $this->authorize('update');

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category->update($validatedData);

        return response()->json(['message' => 'Category modofier']);
    }

    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);
        $this->authorize('delete');

        $category->delete();

        return response()->json(['message' => 'Category supprimer']);
    }
}
