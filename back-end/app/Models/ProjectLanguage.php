<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectLanguage extends Model
{
    use HasFactory;

    protected $table = 'projectLanguage';
    protected $fillable = ['project_id', 'language_id'];
   
    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id');
    }

    public function language()
    {
        return $this->belongsTo(Language::class, 'language_id');
    }
}
