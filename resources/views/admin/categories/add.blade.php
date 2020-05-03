@extends('layouts')
@section('contents')
<div class="wrapper">
    <section class="content container-fluid">
        <form action="{{ route('admin/categories.store') }}" method="POST" role="form" enctype="multipart/form-data">
        <legend>Thêm danh mục </legend>
        @csrf
        <div class="row">
            <div class="col-lg-5">
                <div class="form-group">
                    <label for="">Tên danh mục</label>
                    <input type="text" name="name" class="form-control" id=""  placeholder="Nhập tên danh mục">
                    @if($errors->has('name'))
                        <span class="text-danger">{{ $errors->first('name') }}</span>
                    @endif
                </div>

                <div class="form-group">
                    <label for="">Mô tả</label>
                    <textarea class="form-control" name="description" id="" cols="30" rows="10" placeholder="Nhập mô tả"></textarea>
                    @if($errors->has('description'))
                        <span class="text-danger">{{ $errors->first('description') }}</span>
                    @endif
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </section>
  </div>

@endsection