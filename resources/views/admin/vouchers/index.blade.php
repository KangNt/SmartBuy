@extends('layouts')

@section('title', 'Vouchers')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Vouchers
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    <a href="#" class="btn btn-success">Create</a>
    @if(empty($vouchers))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Code</th>
                <th>Total_price</th>
                <th>Discount_price</th>
                <th>status</th>
                <th>Start_time</th>
                <th>End_time</th>
                <th>Used_count</th>
                
                
            </thead>
            <tbody>
                @foreach($vouchers as $item)
                    <tr>  
                    <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['code'] }}</td>
                        <td>{{ $item ['total_price'] }}</td>
                        <td>{{ $item ['discount_price'] }}</td>
                        <td>{{ $item ['status'] }}</td>
                        <td>{{ $item ['start_time'] }}</td>
                        <td>{{ $item ['end_time'] }}</td>
                        <td>{{ $item ['used_count'] }}</td>


                           
                        <td><a href="#" class="btn btn-primary"><i class="fas fa-pen-alt" > </i></a></td>
                       
                        <td><a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a></td>
                        <td>
                          <form action="#" method="POST">
                            @csrf
                            <a class="btn btn-danger" type="submit" value="" href="{{route('vouchers.destroy',$item ['id'])}}">  <i class="far fa-trash-alt"></i></a>
                         
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