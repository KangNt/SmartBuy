@extends('layouts')

@section('title', 'Products')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Products
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
    @if(empty($products))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Cate_id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Sale_off</th>
                <th>Desc_short</th>
                <th>Detail</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Views</th>
                <th>Rating</th>
                <th>Disabled_comment</th>
          
              
            </thead>
            <tbody>
                @foreach($products as $item)
                    <tr>  
                    <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['cate_id'] }}</td>
                        <td>{{ $item ['name'] }}</td>
                        <td>{{ $item ['image'] }}</td>
                        <td>{{ $item ['price'] }}</td>
                        <td>{{ $item ['sale_off'] }}</td>
                        <td>{{ $item ['desc_short'] }}</td>
                        <td>{{ $item ['detail'] }}</td>
                        <td>{{ $item ['amount'] }}</td>
                        <td>{{ $item ['status'] }}</td>
                        <td>{{ $item ['views'] }}</td>
                        <td>{{ $item ['rating'] }}</td>
                        <td>{{ $item ['disables_comment'] }}</td>
                        
                   
               
                        <td><a href="#" class="btn btn-primary"><i class="fas fa-pen-alt" > </i></a></td>
                       
                        <td><a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a></td>
                        <td>
                          <form action="#" method="POST">
                            @csrf
                            <a class="btn btn-danger" type="submit" value=""  href="{{route('products.destroy',$item ['id'])}}">  <i class="far fa-trash-alt"></i></a>
                         
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