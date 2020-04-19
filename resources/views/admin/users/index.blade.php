@extends('layouts')

@section('title', 'Users')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Users
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    <a href="{{ route('users.create') }}" class="btn btn-success">Create</a>
    @if(empty($users))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Avatar</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Status</th>
            </thead>
            <tbody>
                @foreach($users as $item)
                    <tr>  
                    <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['name'] }}</td>
                        <td>{{ $item ['avatar'] }}</td>
                        <td>{{ $item ['email'] }}</td>
                        <td>{{ $item ['password'] }}</td>
                        <td>{{ $item ['role'] }}</td>
                        <td>{{ $item ['status'] }}</td>


                        <td><a href="{{route('users.edit',$item ['id'])}}" class="btn btn-primary"><i class="fas fa-user-edit"></i></a></td>
                       
                        <td><a href="{{route('users.show',$item ['id'])}}" class="btn btn-info"><i class="fas fa-eye"></i></a></td>
                        <td>
                          <form action="" method="POST">
                            @csrf
                            <a class="btn btn-danger" type="submit" href="{{route('users.destroy',$item ['id'])}}" >
                                <i class="far fa-trash-alt"></i></a>
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