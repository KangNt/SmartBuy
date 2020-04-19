@extends('layouts')

@section('contents')
<div class="wrapper">
    <section class="content container-fluid">

        <form action="{{ route('contacts.store') }}" method="POST" role="form">
        <legend>Create Contacts</legend>
        {{ csrf_field()}}
     
        <div class="form-group">
            <label for="">Fullname</label>
            <input type="text" name="fullname" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Title</label>
            <input type="text" name="title" class="form-control" id="" >
        </div>
        <div class="form-group">    
            <label for="">Content</label>
            <input type="text" name="content" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Status</label>
            <input type="number" name="status" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Email</label>
            <input type="email" name="email" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Phone_number</label>
            <input type="number" name="phone_number" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Address</label>
            <input type="text" name="address" class="form-control" id="" placeholder="Input field">
        </div>
    
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  </div>

  
@endsection