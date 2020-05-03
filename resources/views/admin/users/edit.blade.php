@extends('layouts')
@section('title' , 'Edit')
@section('contents')

<div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h3>Chỉnh sửa tài khoản</h3>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <form class="col-lg-7" action="{{ route('admin/users.update',$user->id)}}" method="POST">
            @csrf
            <div class="form-group">
                <label>Họ tên</label>
                <input type="text" readonly class="form-control"  name="name" value="{{ $user->name }}">
            </div>
            
            <div class="form-group">
                <label>Email</label>
                <input type="email" readonly class="form-control"  name="email" value="{{ $user->email }}">
            </div>
            <div class="form-group">
                <label>Vai trò</label>
                <select class="form-control" name="role" id="">
                    @foreach($role as $key => $rol)
                        <option
                            @if($user->role==$key)
                            selected
                            @endif
                         value="{{$key}}">{{$rol}}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label>Status</label>
                <select class="form-control" name="status" id="">
                    @foreach($status as $key => $stt)
                        <option
                            @if($user->status==$key)
                            selected
                            @endif
                         value="{{$key}}">{{$stt}}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label>Avatar</label>
                <br>
                <img class="col-lg-5" src="{{ $user->avatar }}">
            </div>
            <a href="{{ route('admin/users.index')}}" class="btn btn-danger">Hủy</a>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
       
    </section>
</div>
@endsection