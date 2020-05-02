<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product_gallery extends Model
{
    protected $fillable = [
        'product_id',
        'image_url',
        'image_text',
    ];

}
