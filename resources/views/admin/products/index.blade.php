@extends('layouts')

@section('title', 'Products')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h4>
        Danh sách sản phẩm
      </h4>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    <a href="{{ route('admin/products.create') }}" class="btn btn-success mb-2">
      Thêm sản phẩm
    </a>
    @if(empty($products))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Danh Mục</th>
                <th>Tên Sản Phẩm</th>
                <th>Ảnh</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Lượt Xem</th>
                <th>Đánh Giá</th>
                <th>Tùy chọn</th>
          
              
            </thead>
            <tbody>
                @foreach($products as $item)
                    <tr>  
                    <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['cate_id'] }}</td>
                        <td>{{ $item ['name'] }}</td>
                        <td>
                          <img width="60" height="50" src="{{ $item ['image'] }}">
                        </td>
                        <td>{{ $item->price }}</td>
                        <td>{{ $item ['amount'] }}</td>
                        <td>{{ $item ['views'] }}</td>
                        <td>{{ $item ['rating'] }}</td>
                        <td>
                          <a href="{{route('admin/products.edit',$item ['id'])}}" title="Chỉnh sửa" class="btn btn-primary">
                          <i class="fas fa-pen-alt"></i>
                          </a>
                          <a onclick="return confirm('Bạn có muốn xóa sản phẩm {{ $item['name'] }} không ?');" class="btn btn-danger" title="Xóa"  href="{{route('admin/products.destroy',$item ['id'])}}">
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
  {{ $products->links() }}
  <!-- /.content-wrapper -->
@endsection