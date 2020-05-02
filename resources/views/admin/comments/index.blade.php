@extends('layouts')

@section('title', 'Comments')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Comments
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href=""><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    <a href="{{ route('comments.create') }}" class="btn btn-success">Create</a>
    @if(empty($comments))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Content</th>
                <th>Product_id</th>
                <th>User_id</th>
                <th>Reply_for</th>
              
            </thead>
            <tbody>
                @foreach($comments as $item)
                    <tr>  
                    <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['content'] }}</td>
                        <td>{{ $item ['product_id'] }}</td>
                        <td>{{ $item ['user_id'] }}</td>
                        <td>{{ $item ['reply_for'] }}</td>
                   
                       
                        <td><a href="#" class="btn btn-primary"><i class="fas fa-pen-alt" > </i></a></td>
                       
                        <td><a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a></td>
                        <td>
                          <form action="#" method="POST">
                            @csrf
                            <a class="btn btn-danger" type="submit" value=""  href="{{route('comments.destroy',$item ['id'])}}" >  <i class="far fa-trash-alt"></i></a>
                         
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