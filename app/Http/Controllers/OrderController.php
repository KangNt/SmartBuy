<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Illuminate\Support\Facades\Hash;
class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::all();
        return view('admin.orders.index', ['orders' => $orders]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        return view('admin.orders.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $order = Order::create([

            'customer_name' => $data['customer_name'],
            'customer_phone' => $data['customer_phone'],
            'customer_email' => $data['customer_email'],
            'customer_address' => $data['customer_address'],
            'status' => $data['status'],
            'total_price' => $data['total_price'],
            'payment_method' => $data['payment_method'],
            'discount' => $data['discount'],
            'buyer_id' => $data['buyer_id'],
            'voucher_id' => $data['voucher_id'],
            'message' => $data['message'],
        ]);

        return redirect()->route('orders.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = Order::find($id);
        return $order;
     
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $order = Order::find($id);
        return view('admin.orders.edit', [
            'order' => $order,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        // $order = Order::find($id);
        // // $data = $request->all(); 
        
        // $order->update([
        //     'custommer_name' => $request->custommer_name,
        //     'custommer_phone' => $request->custommer_phone,
        //     'custommer_email' => $request->custommer_email,
        //     'custommer_address' => $request->custommer_address,
        //     'status' => $request->status,
        //     'total_price' => $request->total_price,
        //     'payment_method' => $request->payment_method,
        //     'discount' => $request->discount,
        //     'buyer_id' => $request->buyer_id,
        //     'voucher_id' => $request->voucher_id,
        //     'message' => $request->message,
        // ]);

        // return redirect()->route('admin.orders.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Order::destroy($id);
        return redirect()->route('orders.index');
    }
}
