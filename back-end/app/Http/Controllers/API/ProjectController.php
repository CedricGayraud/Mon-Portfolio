<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Project;
class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'site_name' => 'required|string',
            'site_desc' => 'required|string',
            'object' => 'required|string',
            'collaborators' => 'required|string',
            'id_category' => 'required|exists:categories,id', // Assure que la valeur existe dans la table categories
            'project_date' => 'required|date',
        ]);
    
        $project = new Project;
        $project->site_name = $validatedData['site_name'];
        $project->site_desc = $validatedData['site_desc'];
        $project->object = $validatedData['object'];
        $project->collaborators = $validatedData['collaborators'];
        $project->id_category = $validatedData['id_category'];
        $project->project_date = $validatedData['project_date'];
    
        $project->save();
    
        return response()->json([
            'status' => 200,
            'message' => 'Le projet a bien été ajouté'
        ]);
    }
    
}
