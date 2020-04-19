@extends('layouts')

@section('title', 'Brands')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Brands
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href=""><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    <a href="{{ route ('brands.create')}} " class="btn btn-success">Create</a>
    @if(empty($brands))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>URl</th>
          
              
            </thead>
            <tbody>
                @foreach($brands as $item)
                    <tr>  
                    <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['image'] }}</td>
                        <td>{{ $item ['name'] }}</td>
                        <td>{{ $item ['url'] }}</td>
                        
                   
                        
                        <td><a href="#" class="btn btn-primary"><i class="fas fa-pen-alt" > </i></a></td>
                       
                        <td><a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a></td>
                        <td>
                          <form action="#" method="POST">
                            @csrf
                            <a class="btn btn-danger" type="submit" value=""   href="{{route('brands.destroy',$item ['id'])}}">  <i class="far fa-trash-alt"></i></a>
                         
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