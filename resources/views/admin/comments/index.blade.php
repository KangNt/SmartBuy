@extends('layouts')

@section('title', 'Comments')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Danh sách bình luận
      </h1>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    @if(empty($comments))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>

                <th>Họ tên</th>
                <th>Email</th>
                <th>Avatar</th>
                <th>Nội dung</th>
                <th>Sản phẩm</th>
                <th>Ngày bình luận</th>
                
                <th>Tùy chọn</th>
              
            </thead>
            <tbody>
                @foreach($comments as $item)
                    <tr>  
                        <td>{{ $item->fullname}}</td>
                        <td>{{ $item->email}}</td>
                        <td>
                          <img width="60" height="50" src="{{ $item->avatar}}" alt="">
                        </td>
                        <td>{{ $item->content}}</td>
                        <td>{{ $item->name}}</td>
                        <td>{{ $item->date_cmt}}</td>
                        <td>
                          <a onclick="return confirm('Bạn có muốn xóa bình luận này không')" class="btn btn-danger" type="submit" value=""  href="{{route('admin/comments.destroy',$item->id)}}" >
                            <i class="far fa-trash-alt"></i>
                          </a>

                        </td>

                    </tr>
                @endforeach
            </tbody>
        </table>
        {{$comments->links()}}
    @endif
    <!-- /.content -->
    </section> 
  </div>
  <!-- /.content-wrapper -->
@endsection