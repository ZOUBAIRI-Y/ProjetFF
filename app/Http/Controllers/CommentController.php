<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Property;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index()
    {
        $comments = Comment::all();

        return CommentResource::collection($comments);
    }

    public function show($id)
    {
        Property::findOrFail($id);


        $comments = Comment::where('property_id', $id)->get();

        if ($comments->isEmpty()) {
            return response()->json(['error' => 'les comments non trouvees pour cette property.'], 404);
        }

        return CommentResource::collection($comments);
    }
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required|string|max:255',
            'propertyId' => 'required|exists:properties,id',
        ]);


        $user = auth()->user();

        $comment = new Comment();
        $comment->content = $request->input('content');
        $comment->property_id = $request->input('propertyId');
        $comment->user_id = $user->id;
        $comment->save();

        return new CommentResource($comment);
    }

    public function update(Request $request, $id)
    {

        $request->validate([
            'content' => 'required|string|max:255',
        ]);


        $comment =  Comment::findOrFail($id);


        $this->authorize('update', $comment);

        $comment->content = $request->input('content');
        $comment->save();

        return new CommentResource($comment);
    }

    public function destroy($id)
    {

        $comment =  Comment::findOrFail($id);


        $this->authorize('delete', $comment);


        $comment->delete();

        return response()->json(['message' => 'Comment supprimer.']);
    }
}
