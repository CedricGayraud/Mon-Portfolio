<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\ProjectLanguage;
use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\ProjectLanguages;
use App\Models\Image;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
class ProjectController extends Controller
{
    public function index ()
    {
        $projects = Project::all();
        return response()->json([
            'status' => 200,
            'projects ' => $projects,
        ]);
    }
    public function store(Request $request)
    {
        // Validation pour les images
        $validator = Validator::make($request->all(), [
            'images' => 'required',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);
    
        if ($validator->fails()) {
            return response()->json(["status" => "failed", "message" => "Validation error", "errors" => $validator->errors()]);
        }
    
        if($request->has('images')) {
            foreach($request->file('images') as $image) {
                $filename = Str::random(32).".".$image->getClientOriginalExtension();
                $image->move('uploads/', $filename);
 
                Image::create([
                    'image_name' => $filename
                ]);
            }
 
            $response["status"] = "successs";
            $response["message"] = "Success! image(s) uploaded";
        }
 
        else {
            $response["status"] = "failed";
            $response["message"] = "Failed! image(s) not uploaded";
        }
    
            // Validation des autres champs du formulaire
            $validatedData = $request->validate([
                'site_name' => 'required|string',
                'site_desc' => 'required|string',
                'collaborators' => 'required|string',
                'id_category' => 'required|exists:category,id', // Assurez-vous que la valeur existe dans la table categories
                'project_date' => 'required|date',
                'languages_id' => 'required|array', // Validation pour les langages, qui doit être un tableau
                
            ]);
    
            // Création du projet
            $project = new Project($validatedData);
            $project->save();
    
            // Ajout des langages associés au projet
            foreach ($validatedData['languages_id'] as $languageId) {
                $languages = new ProjectLanguage;
                $languages->project_id = $project->id;
                $languages->language_id = $languageId;
                $languages->save();
            }
    
            return response()->json([
                'status' => 200,
                'message' => 'Le projet a bien été ajouté',
            ]);
     
    }
}
