@extends('layouts')

@section('title', 'Settings_system')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Settings_system
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
    @if(empty($settings_system))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Logo</th>
                <th>Slogan</th>
                <th>Hotline</th>
                <th>Email</th>
                <th>Company_name</th>
                <th>Content_about</th>
                <th>Map</th>
                <th>Address</th>
                <th>url_facebook</th>
                <th>url_youtube</th>
                <th>url_twitter</th>
                <th>url_instagram</th>
              
                
            </thead>
            <tbody>
                @foreach($settings_system as $item)
                    <tr>  
                    <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['logo'] }}</td>
                        <td>{{ $item ['slogan'] }}</td>
                        <td>{{ $item ['hotline'] }}</td>
                        <td>{{ $item ['email'] }}</td>
                        <td>{{ $item ['company_name'] }}</td>
                        <td>{{ $item ['content_about'] }}</td>
                        <td>{{ $item ['map'] }}</td>
                        <td>{{ $item ['address'] }}</td>
                        <td>{{ $item ['url_facebook'] }}</td>
                        <td>{{ $item ['url_youtube'] }}</td>
                        <td>{{ $item ['url_twitter'] }}</td>
                        <td>{{ $item ['url_instagram'] }}</td>
                 
                      
                        <td><a href="#" class="btn btn-primary"><i class="fas fa-pen-alt" > </i></a></td>
                       
                        <td><a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a></td>
                        <td>
                          <form action="#" method="POST">
                            @csrf
                            <a class="btn btn-danger" type="submit" value=""  >  <i class="far fa-trash-alt"></i></a>
                         
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