<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    protected $fillable = [
        'code',
        'total_price',
        'discount_price',
        'status',
        'start_time',
        'end_time',
        'user_count',
        
    ];

}
