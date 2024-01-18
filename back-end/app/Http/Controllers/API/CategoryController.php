<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
class CategoryController extends Controller
{
    public function index ()
    {
        $categories = Category::all();
        return response()->json([
            'status' => 200,
            'categories' => $categories, 
        ]);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
        ]);
    
        $category = new Category;
        $category->name = $validatedData['name'];
        $category->save();
    
        return response()->json([
            'status' => 200,
            'message' => 'La catégorie a bien été ajoutée'
        ]);
    }
}
