<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table ='products';
    protected $fillable = [
        'cate_id',
        'name',
        'image',
        'price',
        'sale_off',
        'desc_short',
        'detail',
        'amount',
        'status',
        'views',
        'rating',
        'disabled_comment',
    ];

}
