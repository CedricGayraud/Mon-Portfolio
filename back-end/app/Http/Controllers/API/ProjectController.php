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
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
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
            $request->validate([
                'site_name' => 'required|string',
                'site_desc' => 'required|string',
                'project_date' => 'required|date',
                'collaborators' => 'required|string',
                'file' => 'image|mimes:jpeg,png,jpg,gif,svg,webp|max:10000', 
                'id_category' => 'required|exists:category,id', 
                'languages_id' => 'required|array', // Validation des langages, qui doivent être un tableau
            ]);
    
            $validatedData = $request->except('file');

            $project = new Project($validatedData);
            $project->save();
    
            foreach ($validatedData['languages_id'] as $languageId) {
                $languages = new ProjectLanguage;
                $languages->project_id = $project->id;
                $languages->language_id = $languageId;
                $languages->save();
            }
    
        if ($request->hasFile('file')) {
                $image = $request->file('file');
                $imagePath = "images/project/{$project->id}";
                $filename = time() . "." . $image->getClientOriginalExtension();
               
                    $image->storeAs($imagePath, $filename, 'public');
                    Image::create([
                        'project_id' => $project->id,
                        'image_name' => $filename
                    ]);
                    $response["status"] = 200;
                    $response["message"] = "Success! Image(s) uploaded";
              
                } else {
                    $response["status"] = "failed";
                    $response["message"] = "Error uploading file: ";
                }
                
                return response()->json($response);

    }
}
