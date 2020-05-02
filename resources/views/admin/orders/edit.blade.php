@extends('users')
@section('title' , 'Edit')
@section('contents')

<div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      
        <form action="{{ route('orders.update','$order->id')}}" method="POST">
            @csrf
            <div class="form-group">
                <label>ID</label>
                <input type="hidden" value="{{ $order->id}}" name="id">
                <input type="text" class="form-control"  name="id" value="{{ $order->id }}">
            </div>
            <div class="form-group">
            <label for="">Customer_name</label> 
            <input type="text" name="customer_name" class="form-control" id=""   value="{{ $order->customer_name }}">
        </div>
        <div class="form-group">
            <label for="">Customer_phone</label>
            <input type="number" name="customer_phone" class="form-control" id=""  value="{{ $order->customer_phone }}">
        </div>
        <div class="form-group">
            <label for="">Customer_email</label>
            <input type="email" name="customer_email" class="form-control" id="" value="{{ $order->customer_email }}">
        </div>
        <div class="form-group">
            <label for="">Customer_address</label>
            <input type="text" name="customer_address" class="form-control" id=""value="{{ $order->customer_address }}" >
        </div>
        <div class="form-group">
            <label for="">Status</label>
            <input type="number" name="status" class="form-control" id=""value="{{ $order->status }}" >
        </div>
        <div class="form-group">
            <label for="">Total_price</label>
            <input type="number" name="total_price" class="form-control" id="" value="{{ $order->total_price }}">
        </div>
        <div class="form-group">
            <label for="">Payment_method</label>
            <input type="text" name="payment_method" class="form-control" id=""value="{{ $order->payment_method }}" >
        </div>
        <div class="form-group">
            <label for="">Discount</label>
            <input type="text" name="discount" class="form-control" id="" value="{{ $order->discount }}">
        </div>
        <div class="form-group">
            <label for="">Buyer_id</label>
            <input type="text" name="buyer_id" class="form-control" id="" value="{{ $order->buyer_id }}">
        </div>
        <div class="form-group">
            <label for="">Voucher_id</label>
            <input type="text" name="voucher_id" class="form-control" id=""value="{{ $order->voucher_id }}" >
        </div>
        <div class="form-group">
            <label for="">Message</label>
            <input type="text" name="message" class="form-control" id=""value="{{ $order->message }}" >
        </div>
         
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
       
    </section>
</div>
@endsection