<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;
use App\Models\ProjectLanguage;
use Carbon\Carbon;

class JobController extends Controller
{
    public function index() {
        $jobs = Job::all();
        $projectLanguages = [];

    foreach ($jobs as $job) {
        $languages = ProjectLanguage::where('job_id', $job->id)->with('language')->get();
        // $languages = ProjectLanguage::where('project_id', $project->id)->get()->toArray();
        $projectLanguages[$job->id] = $languages;
    }
        return response()->json([
            'status' => 200,
            'jobs' => $jobs,
            'projectLanguages' => $projectLanguages,
        ]);
    }

    public function store(Request $request) 
    {
        $data = $request->validate([
            'name' => 'required|string',
            'jobDescription' => 'required|string',
            'enterpriseName' => 'required|string',
            'dateStart' => 'required|date',
            'dateEnd' => 'required|date',
            'languages_id' => 'required|array',
        ]);

        $data['dateStart'] = Carbon::parse($data['dateStart'])->locale('fr')->format('F Y');
        $data['dateEnd'] = Carbon::parse($data['dateEnd'])->locale('fr')->format('F Y');

        $job = new Job($data);
        $job->save();
        $message = 'Le job "' . $data['name'] . '" a bien été ajouté';

        foreach ($data['languages_id'] as $languageId) {
            $languages = new ProjectLanguage;
            $languages->job_id = $job->id;
            $languages->language_id = $languageId;
            $languages->save();
        }

        return response()->json([
            'status' => 200,
            'message' => $message,
        ]);
    }
}
