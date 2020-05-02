@extends('layouts')
@section('title', 'Chỉnh sửa sản phẩm')
@section('contents')
<div class="wrapper">
    <section class="content container-fluid">
        <form  action="{{ route('admin/products.update',$product->id)}}" method="POST" role="form" enctype="multipart/form-data">
        <legend>Products </legend>
        @csrf
        <div class="row">
            <div class="col-lg-5">
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" name="name" class="form-control" id="" value="{{ $product->name }}" >
                </div>
                <div class="form-group">
                    <label for="">Cate_id</label> 
                    <input type="text" name="cate_id" class="form-control" id="" value="{{ $product->cate_id }}"  >
                </div>
                <div class="form-group">
                    <label for="">Name</label>
                    <input type="text" name="name" class="form-control" id="" value="{{ $product->name }}" >
                </div>
                <div class="form-group">
                    <label for="">Amount</label>
                    <input type="number" name="amount" class="form-control" id=""value="{{ $product->amount }}" >
                </div>
                <div class="form-group">
                    <label for="">Views</label> 
                    <input type="number" name="views" class="form-control" id=""value="{{ $product->views }}" >
                </div>
                <div class="form-group">
                    <label for="">Rating</label>
                    <input type="text" name="rating" class="form-control" id="" value="{{ $product->rating }}">
                </div>
                <div class="form-group">
                    <label for="">Trạng thái bình luận</label>
                    <input type="number" name="disabled_comment" class="form-control" id="" value="{{ $product->disabled_comment }}" >
                </div>
            </div>
            <div class="col-lg-5">
                <div class="form-group">
                    <label for="">Price</label>
                    <input type="number" name="price" class="form-control" id="" value="{{ $product->price }}">
                </div>
                <div class="form-group">
                    <label for="">Sale_off</label>
                    <input type="number" name="sale_off" class="form-control" id="" value="{{ $product->sale_off }}">
                </div>
                <div class="form-group">
                    <label for="">Desc_short</label>
                    <input type="text" name="desc_short" class="form-control" id="" value="{{ $product-> desc_short }}">
                </div>
                <div class="form-group">
                    <label for="">Detail</label>
                    <input type="text" name="detail" class="form-control" id="" value="{{ $product->detail }}">
                </div>
                <div>
                    <label style="cursor:pointer" for="up-load">
                    <i class="fas fa-cloud-upload-alt"> Tải lên</i>
                    </label>
                    <input style="display:none" id="up-load" type="file" name="image" class="form-control">
                </div>
                <div class="mt-2">
                    <img style="padding:0 0" class="col-lg-12" src="{{$product->image}}">
                    <div class="mt-2" style="justify-content: center">
                        <i class="fas fa-images"> Album Ảnh</i>
                    </div>
                    <div class="row">
                        
                        <div class="col-6 col-sm-4 mt-3">
                            <img class="col p-0" src="{{$product->image}}">
                        </div>
                        <div class="col-6 col-sm-4 mt-3">
                            <img class="col p-0" src="{{$product->image}}">
                        </div>
                        <div class="col-6 col-sm-4 mt-3">
                            <img class="col p-0" src="{{$product->image}}">
                        </div>
                        <div class="col-6 col-sm-4 mt-3">
                            <img class="col p-0" src="{{$product->image}}">
                        </div>     
                    </div>
                </div> 
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    
    </section>
  </div>

@endsection