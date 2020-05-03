@extends('layouts')

@section('title', 'Vouchers')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Danh sách mã quà tặng
      </h1>
      
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
                <th>Tùy chọn</th>
                
                
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
                        <td><a href="#" class="btn btn-primary">
                          <i class="fas fa-pen-alt" > </i></a>
                          <a class="btn btn-danger" type="submit" value="" href="{{route('admin/vouchers.destroy',$item ['id'])}}">
                            <i class="far fa-trash-alt"></i>
                          </a>

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