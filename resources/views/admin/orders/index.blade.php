@extends('layouts')

@section('title', 'Orders')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Đơn Hàng
      </h1>
    </section>
    <div class="row">
      <div class="col-lg-5">
        <input id="search" class="form-control mt-1 col-lg-7" type="text" placeholder="Tìm kiếm: Mã đơn hàng, tên khách hàng..." aria-label="Search">
      </div>
      <div class="col-lg-5">
          <select class="float-right form-control col-lg-10 mt-1" name="" id="">
            <option value="">Tùy chọn sản phẩm</option>
            <option value="">Lọc sản phẩm giá 100 - 200 </option>
            <option value="">Lọc từ mới tới cũ</option>
          </select>
      </div>
      <div class="col-lg-2">
        <button class="btn btn-primary mt-1"><i class="fas fa-filter"></i> Lọc</button>
      </div>
    </div>
    <br>
    <!-- Main content -->
    <section class="content container-fluid">
    <?php $err=''; ?>
    
        <table class="table">
            <thead>
                <th>Mã đơn hàng</th>
                <th>Tên khách hàng</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th>Địa chỉ nhận hàng</th>
                <th>Tổng tiền</th>
                <th>Phương thức thanh toán</th>
                <th>Trạng thái</th>
                <th>Tùy chọn</th>
                
                
            </thead>
            <tbody>
              @if(count($orders)==0)
                 <td> Không có dữ liệu</td>
              @else
                @foreach($orders as $item)
                    <tr>  
                      <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['customer_name'] }}</td>   
                        <td>{{ $item ['customer_phone'] }}</td>
                        <td>{{ $item ['customer_email'] }}</td>
                        <td>{{ $item ['customer_address'] }}</td>
                        
                        <td>{{ $item ['total_price'] }}</td>
                        <td>{{ $item ['payment_method'] }}</td>
                        <td>{{ $item ['status'] }}</td>
                        <td>
                        <a href="#" class="btn btn-primary">
                            <i class="fas fa-pen-alt"> </i>
                          </a>
                          <a href="{{route('admin/orders.show',$item['id'])}}" class="btn btn-info">
                            <i class="fas fa-eye"></i>
                          </a>
                          <a onclick="return confirm('Bạn có muốn xóa đơn hàng này không?')" class="btn btn-danger" type="submit" value="" href="{{route('admin/orders.destroy',$item ['id'])}}"  >
                            <i class="far fa-trash-alt"></i>
                          </a>
                          

                        </td>
                        


                    </tr>
                  @endforeach
                @endif
            </tbody>
        </table>
   
    <!-- /.content -->
    </section> 
  </div>
  <!-- /.content-wrapper -->
@endsection