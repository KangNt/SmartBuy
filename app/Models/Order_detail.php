<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order_detail extends Model
{
    protected $table ='order_detail';
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'unit_price',
    ];

}
