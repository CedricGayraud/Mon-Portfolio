<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Language;
class LanguageController extends Controller
{
    public function index ()
    {
        $languages = Language::all();
        return response()->json([
            'status' => 200,
            'languages' => $languages, 
        ]);
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
        ]);
    
        $languages = new Language;
        $languages->name = $validatedData['name'];
        $languages->save();
        $addedLanguages = Language::pluck('name')->toArray();
        $message = 'Le langage "' . $validatedData['name'] . '" a bien été ajouté. Langues ajoutées : ' . implode(', ', $addedLanguages);

        return response()->json([
            'status' => 200,
            'message' => $message,
        ]);
    }
}
