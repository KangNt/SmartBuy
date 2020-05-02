<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'customer_name',
        'customer_phone',
        'customer_email',
        'customer_address',
        'status',
        'total_price',
        'payment_method',
        'discount',
        'buyer_id',
        'voucher_id',
        'message',
        
    ];

}
