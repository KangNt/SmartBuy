<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{route('admin')}}" class="brand-link">
      <img src="{{asset('images/logo-S.png') }}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">SmartBuy</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img style="height: 40px;width: 2.5rem;" src="@if(Auth::user()) {{Auth::user()->avatar}} @endif" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          
          <a href="#" class="d-block">
            @if(Auth::user())
              {{Auth::user()->name}}
            @endif
          </a>  
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
               Hệ Thống
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Cài Đặt</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Slider</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
               Quản Lí
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{route('admin/users.index')}}" class="nav-link ">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Tài Khoản</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{route('admin/orders.index')}}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Đơn hàng</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{route('admin/categories.index')}}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Danh mục</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{route('admin/comments.index')}}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Bình luận</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{route('admin/contacts.index')}}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Liên hệ</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{route('admin/products.index')}}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sản phẩm</p>
                </a>
              </li>
              
              <li class="nav-item">
                <a href="{{route('admin/vouchers.index')}}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Mã giảm giá</p>
                </a>
              </li>

            </ul>
          </li>
          
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
      
    </div>
    <!-- /.sidebar -->

    
  </aside>
