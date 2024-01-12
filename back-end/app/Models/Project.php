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
        'object',
        'collaboratos',
        'id_category',
        'project_date',
    ];
}
