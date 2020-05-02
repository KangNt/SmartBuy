@extends('layouts')

@section('contents')
<div class="wrapper">
    <section class="content container-fluid">

        <form action="{{ route('users.store') }}" method="POST" role="form">
        <legend>Create Users</legend>
        {{ csrf_field()}}
     
        <div class="form-group">
            <label for="">Full Name</label>
            <input type="text" name="name" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Avatar</label>
            <input type="file" name="avatar" class="form-control" id="" >
        </div>
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" name="email" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" name="password" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Role</label>
            <input type="number" name="role" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Status</label>
            <input type="number" name="status" class="form-control" id="" placeholder="Input field">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  </div>

  
@endsection