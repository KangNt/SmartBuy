@extends('layouts')

@section('contents')
<div class="wrapper">
    <section class="content container-fluid">

        <form action="{{ route('comments.store') }}" method="POST" role="form">
        <legend>Create Comments</legend>
        {{ csrf_field()}}
     
        <div class="form-group">
            <label for="">Content</label>
            <input type="text" name="content" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Product_id</label>
            <input type="number" name="product_id" class="form-control" id="" >
        </div>
        <div class="form-group">    
            <label for="">User_id</label>
            <input type="number" name="user_id" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Reply_for</label>
            <input type="text" name="reply_for" class="form-control" id="" placeholder="Input field">
        </div>
    
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  </div>

  
@endsection