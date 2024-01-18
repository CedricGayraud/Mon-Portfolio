<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $table = 'projects';
    protected $fillable = [
        'site_name',
        'site_desc',
        'collaborators',
        'id_category',
        'project_date',
    ];

    public function languages()
    {
        return $this->belongsToMany(Language::class, 'projectLanguage', 'project_id', 'language_id');
    }
}
