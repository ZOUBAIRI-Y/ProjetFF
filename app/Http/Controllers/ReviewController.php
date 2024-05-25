<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'text' => 'required|string',
            'rating' => 'required|integer|min:1|max:10',
            'propertyId' => 'required|exists:properties,id'
        ]);

        $review = new Review();
        $review->review = $validatedData['text'];
        $review->rating = $validatedData['rating'];
        $review->property_id = $validatedData['propertyId'];
        $review->user_id = auth()->user()->id;
        $review->save();

        return response()->json(['message' => 'Review created'], 201);
    }


    public function destroy($id)
    {
        $review = Review::findOrFail($id);
        $this->authorize('delete', $review);

        $review->delete();

        return response()->json(['message' => 'Review deleted successfully']);
    }
}
