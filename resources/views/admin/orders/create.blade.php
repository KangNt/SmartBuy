@extends('layouts')
@section('contents')
<div class="wrapper">
    <section class="content container-fluid">

        <form action="{{ route('orders.store') }}" method="POST" role="form">
        <legend>Order </legend>
        {{ csrf_field()}}
        <div class="form-group">
            <label for="">Customer_name</label> 
            <input type="text" name="customer_name" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Customer_phone</label>
            <input type="number" name="customer_phone" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Customer_email</label>
            <input type="email" name="customer_email" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Customer_address</label>
            <input type="text" name="customer_address" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Status</label>
            <input type="number" name="status" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Total_price</label>
            <input type="number" name="total_price" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Payment_method</label>
            <input type="text" name="payment_method" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Discount</label>
            <input type="text" name="discount" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Buyer_id</label>
            <input type="text" name="buyer_id" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Voucher_id</label>
            <input type="text" name="voucher_id" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Message</label>
            <input type="text" name="message" class="form-control" id="" placeholder="Input field">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  </div>

@endsection