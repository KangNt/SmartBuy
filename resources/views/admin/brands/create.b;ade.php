@extends('layouts')

@section('contents')
<div class="wrapper">
    <section class="content container-fluid">

        <form action="{{ route('brands.store') }}" method="POST" role="form">
        <legend>Create Brands</legend>
        {{ csrf_field()}}
     
        <div class="form-group">
            <label for="">Image</label>
            <input type="file" name="image" class="form-control" id="" >
        </div>
        <div class="form-group">
            <label for="">Name</label>
            <input type="text" name="name" class="form-control" id=""  placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">URl</label>
            <input type="text" name="url" class="form-control" id="" placeholder="Input field">
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  </div>

  
@endsection