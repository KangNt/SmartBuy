@extends('layouts')
@section('contents')
<div class="wrapper">
    <section class="content-header">
      <h3>Chi tiết hóa đơn</h3>
    </section>  
    <section class="content container-fluid">

    @if(empty($order))
        <p>No Data</p>
    @else
        <table class="table col-lg-6">
            <thead>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Ảnh</th>
                <th>Giá</th>
                
            </thead>
            <tbody>
                @foreach($order as $item)
                    <tr>
                        <td>{{$item->name}}</td>
                        <td>{{$item->quantity}}</td>  
                        <td>
                           <img width="60" height="50" src=" {{$item->image}}" alt="">
                        </td>
                        <td>{{$item->unit_price}}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </section>
    @endif
</div>
@endsection