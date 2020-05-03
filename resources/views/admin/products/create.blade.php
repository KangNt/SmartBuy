@extends('layouts')
@section('contents')
<div class="wrapper">
    <section class="content container-fluid">
        <form action="{{ route('admin/products.store') }}" method="POST" role="form" enctype="multipart/form-data">
        <legend>Thêm sản phẩm </legend>
        @csrf
        <div class="row">
            <div class="col-lg-5">
                <div class="form-group">
                    <label for="">Tên Sản Phẩm</label>
                    <input type="text" name="name" class="form-control" id=""  placeholder="Nhập tên sản phẩm">
                    @if($errors->has('name'))
                        <span class="text-danger">{{ $errors->first('name') }}</span>
                    @endif
                </div>
                
                <div class="form-group">
                    <label for="">Danh Mục</label> 
                    <select name="cate_id" class="form-control">
                        <option value="">Chọn Danh Mục</option>
                        @if(isset($categories))
                            @foreach($categories as $cates)
                            <option value="{{$cates->id}}">{{$cates->cate_name}}</option>
                            @endforeach
                        @endif
                    </select>
                    @if($errors->has('cate_id'))
                        <span class="text-danger">{{ $errors->first('cate_id') }}</span>
                    @endif
                </div>
                
                <div class="form-group">
                    <label for="">Giá</label>
                    <input type="number" name="price" class="form-control" id="" placeholder="Nhập giá sản phẩm">
                    @if($errors->has('price'))
                        <span class="text-danger">{{ $errors->first('price') }}</span>
                    @endif
                </div>
                <div class="form-group">
                    <label for="">Giảm giá</label>
                    <input type="number" name="sale_off" class="form-control" id="" placeholder="Nhập giá khuyến mãi">
                </div>
                <div class="form-group">
                    <label for="">Số lượng</label>
                    <input type="number" name="amount" class="form-control" id="" placeholder="Nhập số lượng">
                    @if($errors->has('amount'))
                        <span class="text-danger">{{ $errors->first('amount') }}</span>
                    @endif
                </div>
                <div class="form-group">
                    <label for="">Trạng thái bình luận</label>
                    <select name="disabled_comment" class="form-control" name="" id="">
                        <option value="">Chọn trạng thái</option>
                        @if(isset($status_cmt))
                            @foreach($status_cmt as $key => $stt_cmt)
                            <option value="{{$stt_cmt}}">{{$key}}</option>
                            @endforeach
                        @endif
                    </select>
                    
                </div>
                <div class="form-group">
                    <label for="">Lượt xem</label> 
                    <input type="number" name="views" class="form-control" id="" placeholder="Nhập lượt xem">
                </div>
                
                
            </div>
            <div class="col-lg-5">
                <div class="form-group">
                    <label for="">Mô tả ngắn</label>
                    <textarea class="form-control" name="desc_short" id="" cols="30" placeholder="Nhập mô tả ngắn" rows="5"></textarea>
                </div>
                <div class="form-group">
                    <label for="">Mô tả chi tiết</label>
                    <textarea class="form-control" name="detail" id="" cols="30" placeholder="Nhập mô tả chi tiết" rows="10"></textarea>
                </div>
                <div class="form-group">
                    <label for="">Ảnh</label>
                    <input type="file" name="image" class="form-control" id="" >
                    @if($errors->has('image'))
                        <span class="text-danger">{{ $errors->first('image') }}</span>
                    @endif
                </div>
                
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  </div>

@endsection