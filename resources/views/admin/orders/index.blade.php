@extends('layouts')

@section('title', 'Orders')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Orders
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    <a href="{{ route('orders.create') }}" class="btn btn-success">Create</a>
    @if(empty($orders))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Customer_name</th>
                <th>Customer_phone</th>
                <th>Customer_email</th>
                <th>Customer_address</th>
                <th>Status</th>
                <th>Total_price</th>
                <th>Payment_method</th>
                <th>Discount</th>
                <th>Buyer_id</th>
                <th>Voucher_id</th>
                <th>Message</th>
                
            </thead>
            <tbody>
                @foreach($orders as $item)
                    <tr>  
                      <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['customer_name'] }}</td>   
                        <td>{{ $item ['customer_phone'] }}</td>
                        <td>{{ $item ['customer_email'] }}</td>
                        <td>{{ $item ['customer_address'] }}</td>
                        <td>{{ $item ['status'] }}</td>
                        <td>{{ $item ['total_price'] }}</td>
                        <td>{{ $item ['payment_method'] }}</td>
                        <td>{{ $item ['discount'] }}</td>
                        <td>{{ $item ['buyer_id'] }}</td>
                        <td>{{ $item ['voucher_id'] }}</td>
                        <td>{{ $item ['message'] }}</td>
                          
                        <td><a href="#" class="btn btn-primary"><i class="fas fa-pen-alt" > </i></a></td>
                       
                        <td><a href="{{route('orders.show',$item ['id'])}}" class="btn btn-info"><i class="fas fa-eye"></i></a></td>
                        <td>
                          <form action="#" method="POST">
                            @csrf
                            <a class="btn btn-danger" type="submit" value="" href="{{route('orders.destroy',$item ['id'])}}"  >  <i class="far fa-trash-alt"></i></a>
                         
                          </form>
                        </td>

                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif
    <!-- /.content -->
    </section> 
  </div>
  <!-- /.content-wrapper -->
@endsection