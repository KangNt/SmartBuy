@extends('layouts')

@section('title', 'Categories')

@section('contents')
<!-- Code -->
  <!-- Content Wrapper. Contains page content -->
  <div class="wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Danh Mục
      </h1>
      
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
    <a href="{{route('admin/categories.create')}}" class="btn btn-success">Tạo mới</a>
    <br>
    <br>
    @if(empty($categories))
        <p>No Data</p>
    @else
        <table class="table">
            <thead>
                <th>ID</th>
                <th>Tên danh mục</th>
                <th>Mô tả</th> 
                <th>Tùy chọn</th>

            </thead>
            <tbody>
                @foreach($categories as $item)
                    <tr>  
                    <td>{{ $item ['id'] }}</td>
                        <td>{{ $item ['cate_name'] }}</td>
                        <td>{{ $item ['description'] }}</td>

                        <td>
                          <a href="{{route('admin/categories.edit',$item ['id'])}}" class="btn btn-primary">
                            <i class="fas fa-pen-alt" ></i>
                          </a>
                          <a onclick="return confirm('Bạn có muốn xóa danh mục <?php echo $item->cate_name ?> không')" class="btn btn-danger" type="submit" value=""  href="{{route('admin/categories.destroy',$item ['id'])}}" > 
                            <i class="far fa-trash-alt">
                            </i>
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