@extends('layouts')

@section('title', 'Contacts')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Contacts
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    <a href="{{ route('contacts.create')}}" class="btn btn-success">Create</a>
    @if(empty($contacts))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Fullname</th>
                <th>Title</th>
                <th>Content</th>
                <th>Status</th>
                <th>Email</th>
                <th>Phone_number</th>
                <th>Address</th>
            </thead>
            <tbody>
                @foreach($contacts as $item)
                    <tr>  
                    <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['fullname'] }}</td>
                        <td>{{ $item ['title'] }}</td>
                        <td>{{ $item ['content'] }}</td>
                        <td>{{ $item ['status'] }}</td>
                        <td>{{ $item ['email'] }}</td>
                        <td>{{ $item ['phone_number'] }}</td>
                        <td>{{ $item ['address'] }}</td>



                            
                        <td><a href="#" class="btn btn-primary"><i class="fas fa-pen-alt" > </i></a></td>
                       
                        <td><a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a></td>
                        <td>
                          <form action="#" method="POST">
                            @csrf
                            <a class="btn btn-danger" type="submit" value=""  href="{{route('contacts.destroy',$item ['id'])}}" >  <i class="far fa-trash-alt"></i></a>
                         
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