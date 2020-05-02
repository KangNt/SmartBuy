@extends('layouts')
@section('contents')
<div class="wrapper">
    <section class="content container-fluid">
        <form action="{{ route('users.show')}}" method="POST" role="form">
        <legend>Show</legend>
        {{ csrf_field()}}
        <div class="form-group">
            <label for="">Cate_id</label> 
            <input type="text" name="cate_id" class="form-control" id="" >
        </div>
        <div class="form-group">
            <label for="">Name</label>
            <input type="text" name="name" class="form-control" id=""  placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Image</label>
            <input type="file" name="image" class="form-control" id="" >
        </div>
        <div class="form-group">
            <label for="">Price</label>
            <input type="number" name="price" class="form-control" id="" >
        </div>
        <div class="form-group">
            <label for="">Sale_off</label>
            <input type="number" name="sale_off" class="form-control" id="" >
        </div>
        <div class="form-group">
            <label for="">Desc_short</label>
            <input type="text" name="desc_short" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Detail</label>
            <input type="text" name="detail" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Amount</label>
            <input type="number" name="amount" class="form-control" id="" >
        </div>
        <div class="form-group">
            <label for="">Status</label>
            <input type="number" name="status" class="form-control" id="" >
        </div>
        <div class="form-group">
            <label for="">Views</label> 
            <input type="number" name="views" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Rating</label>
            <input type="text" name="rating" class="form-control" id="" placeholder="Input field">
        </div>
        <div class="form-group">
            <label for="">Disabled_comment</label>
            <input type="number" name="disabled_comment" class="form-control" id="" >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  </div>

@endsection