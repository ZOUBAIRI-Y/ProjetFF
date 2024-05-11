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

    public function show(string $id)
    {
        $category =  Category::findOrFail($id);


        $res = new CategoryResource($category);
        return response()->json($res);
    }

    public function update(Request $request, string $id)
    {
        $category = Category::find($id);
        $this->authorize('update');

        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $category->update($validatedData);

        return response()->json(['message' => 'Category updated']);
    }

    public function destroy(string $id)
    {
        $category = Category::find($id);
        $this->authorize('delete');

        if (!$category) {
            return response()->json(['error' => 'Category not found'], 404);
        }

        $category->delete();

        return response()->json(['message' => 'Category deleted']);
    }
}
