<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Settings_system extends Model
{
    protected $fillable = [
        'logo',
        'slogan',
        'hotline',
        'email',
        'company_name',
        'content_about',
        'map',
        'address',
        'url_facebook',
        'url_youtube',
        'url_twitter',
        'url_instagram',
    ];

}
