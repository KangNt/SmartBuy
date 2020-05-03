@extends('layouts')

@section('title', 'Contacts')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Danh sách liên hệ
      </h1>
     
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    
    @if(empty($contacts))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>Họ tên</th>
                <th>Tiêu đề</th>
                <th>Nội dung</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Ngày gửi liên hệ</th>
                <th>Trạng thái</th>
                <th>Tùy chọn</th>
            </thead>
            <tbody>
                @foreach($contacts as $item)
                    <tr>  
                        <td>{{ $item ['fullname'] }}</td>
                        <td>{{ $item ['title'] }}</td>
                        <td>{{ $item ['content'] }}</td>
                        <td>{{ $item ['email'] }}</td>
                        <td>{{ $item ['phone_number'] }}</td>
                        <td>{{ $item ['address'] }}</td>
                        <td>{{ $item ['created_at'] }}</td>
                        <td>
                          @if($item['status']==1)
                            <p class="text-success">Đã trả lời</p>
                          @else
                          <p class="text-danger">Chưa trả lời</p>
                          @endif
                        </td>
                        <td>
                          <a href="#" class="btn btn-primary"><i class="fas fa-reply" ></i>
                          </a>
                          <a onclick="return confirm('Bạn có muốn xóa liên hệ này không')" class="btn btn-danger" type="submit" value=""  href="{{route('admin/contacts.destroy',$item ['id'])}}" >
                            <i class="far fa-trash-alt"></i>
                          </a>

                        </td>

                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif
    <!-- /.content -->
    </section> 
  </div>
  <!-- /.content-wrapper -->
@endsection