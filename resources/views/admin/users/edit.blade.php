@extends('users')
@section('title' , 'Edit')
@section('contents')

<div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
      
        <form action="{{ route('users.update','$user->id')}}" method="POST">
            @csrf
            <div class="form-group">
                <label>ID</label>
                <input type="hidden" value="{{ $user->id}}" name="id">
                <input type="text" class="form-control"  name="id" value="{{ $user->id }}">
            </div>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control"  name="name" value="{{ $user->name }}">
            </div>
            <div class="form-group">
                <label>Avatar</label>
                <input type="file" class="form-control"  name="avatar" value="{{ $user->avatar }}">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control"  name="email" value="{{ $user->email }}">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control"  name="password" value="{{ $user->password }}">
            </div>
            <div class="form-group">
                <label>Role</label>
                <input type="number" class="form-control"  name="role" value="{{ $user->role }}">
            </div>
            <div class="form-group">
                <label>Status</label>
                <input type="number" class="form-control"  name="status" value="{{ $user->status }}">
            </div>
         
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
       
    </section>
</div>
@endsection