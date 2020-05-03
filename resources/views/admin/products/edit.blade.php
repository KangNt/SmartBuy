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
                    <label for="">Tên sản phẩm</label>
                    <input type="text" name="name" class="form-control" id="" value="{{ $product->name }}" >
                </div>
                <div class="form-group">
                    <label for="">Danh mục</label> 
                    
                    <select name="cate_id" class="form-control">
                        @if(isset($listCate))
                            @foreach($listCate as $cates)
                                <option @if($cates->id==$product->cate_id)selected 
                                    @endif
                                    value="{{$cates->id}}">
                                    {{$cates->cate_name}}
                                </option>   
                            @endforeach
                        @endif
                    </select>
                </div>
                <div class="form-group">
                    <label for="">Giá</label>
                    <input type="text" name="price" class="form-control" id="" value="{{ $product->price }}" >
                </div>
                <div class="form-group">
                    <label for="">Giảm giá</label>
                    <input type="number" name="sale_off" class="form-control" id="" value="{{ $product->sale_off }}">
                </div>
                <div class="form-group">
                    <label for="">Số lượng</label>
                    <input type="number" name="amount" class="form-control" id=""value="{{ $product->amount }}" >
                </div>
                <div class="form-group">
                    <label for="">Lượt xem</label> 
                    <input type="number" name="views" class="form-control" id=""value="{{ $product->views }}" >
                </div>
                <div class="form-group">
                    <label for="">Đánh giá</label>
                    <input type="text" name="rating" class="form-control" id="" value="{{ $product->rating }}">
                </div>
                <div class="form-group">
                    <label for="">Trạng thái bình luận</label>
                    <select name="disabled_comment" class="form-control">
                        @if(isset($product))
                            @foreach($status_cmt as $key => $stt_cmt)
                                <option @if($product->disabled_comment==$stt_cmt)selected 
                                    @endif
                                    value="{{$stt_cmt}}">
                                    {{$key}}
                                </option>   
                            @endforeach
                        @endif
                    </select>
                </div>   
                <div class="form-group">
                    <label for="">Mô tả ngắn</label>
                    <textarea class="form-control" name="desc_short" id="" cols="30" rows="5">{{ $product-> desc_short }}</textarea>
                    
                </div> 
                <a href="{{route('admin/products.index')}}" class="btn btn-danger">Hủy</a>
                <button type="submit" class="btn btn-primary">Cập nhật</button>
            </div>
            <div class="col-lg-5"> 
                <div class="form-group">
                    <label for="">Mô tả chi tiết</label>
                    <textarea class="form-control" name="desc_short" id="" cols="30" rows="10">{{ $product-> detail }}</textarea>
                </div>
                <div>
                    <label style="cursor:pointer" for="up-load">
                    <i class="fas fa-cloud-upload-alt"> Tải lên</i>
                    </label>
                    <input style="display:none" id="up-load" type="file" name="image" class="form-control">
                </div>
                <div class="mt-2">
                    <img style="padding:0 0;height:250px;" class="col-lg-12" src="{{$product->image}}">
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
        
    </form>
    
    </section>
  </div>

@endsection