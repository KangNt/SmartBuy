<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('wal');
Route::get('login-dashboard', function () {
    if(Auth::check()){
        return redirect()->route('admin');
    }else{
        return view('login');
    }  
})->name('login');
Route::get('logout', function () {
    Auth::logout();
    return redirect()->route('login');
    
})->name('logout');
Route::post('check-login', function (Request $request) {
    $Get_info = $request->only(['email', 'password']);
    $checkLogin = Auth::attempt($Get_info);
    if($checkLogin){
        return redirect()->route('admin');
    }
    else{
        return redirect()->route('login')->with('err','Tài khoản hoặc mật khẩu không chính xác');
    }
})->name('Checklogin');


//  Route::get('/','HomeController@index')->name('admin');
 Route::get('admin','HomeController@index')->name('admin')->middleware('Checklogin');
 Route::group([
    'prefix'=>'admin/users',
    'as'=>'admin/users.',
    'middleware'=>'Checklogin'
    ]
    ,function(){
    Route::get('/','UserController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','UserController@create')->name('create');//tạo mới
    Route::post('/store','UserController@store')->name('store');//lưu trữ một tài nguyên mới
    Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    Route::get('/show','UserController@show')->name('show');
    Route::get('/destroy/{id}','UserController@destroy')->name('destroy');//xóa 1 tài nguyên
});

Route::group([
    'prefix'=>'admin/orders',
    'as'=>'admin/orders.','middleware'=>'Checklogin'
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','OrderController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','OrderController@create')->name('create');//tạo mới
    Route::post('/store','OrderController@store')->name('store');//lưu trữ một tài nguyên mới
    Route::get('/edit/{id}','OrderController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    Route::post('/update/{id}','OrderController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    Route::get('/show/{id}','OrderController@show')->name('show');
    Route::get('/destroy/{id}','OrderController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});

Route::group([
    'prefix'=>'admin/contacts',
    'as'=>'admin/contacts.','middleware'=>'Checklogin'
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','ContactController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','ContactController@create')->name('create');//tạo mới
    Route::post('/store','ContactController@store')->name('store');//lưu trữ một tài nguyên mới
    Route::get('/edit/{id}','ContactController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    Route::post('/update/{id}','ContactController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    Route::get('/show','ContactController@show')->name('show');
    Route::get('/destroy/{id}','ContactController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});


Route::group([
    'prefix'=>'admin/comments',
    'as'=>'admin/comments.','middleware'=>'Checklogin'
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','CommentController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','CommentController@create')->name('create');//tạo mới
    Route::post('/store','CommentController@store')->name('store');//lưu trữ một tài nguyên mới
    Route::get('/edit/{id}','CommentController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    Route::post('/update/{id}','CommentController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    Route::get('/show','CommentController@show')->name('show');
    Route::get('/destroy/{id}','CommentController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});


Route::group([
    'prefix'=>'admin/products',
    'as'=>'admin/products.','middleware'=>'Checklogin'
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('list-product','ProductController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','ProductController@create')->name('create');//tạo mới
    Route::post('/store','ProductController@store')->name('store');//lưu trữ một tài nguyên mới
    Route::get('/edit-product/{id}','ProductController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    Route::post('/update-product/{id}','ProductController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    Route::get('/show','ProductController@show')->name('show');
    Route::post('/search','ProductController@search')->name('search');
    Route::get('/destroy/{id}','ProductController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});


Route::group([
    'prefix'=>'admin/categories',
    'as'=>'admin/categories.','middleware'=>'Checklogin'
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','CategoryController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','CategoryController@create')->name('create');//tạo mới
    Route::post('/store','CategoryController@store')->name('store');//lưu trữ một tài nguyên mới
    Route::get('/edit/{id}','CategoryController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    Route::post('/update/{id}','CategoryController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    Route::get('/show','CategoryController@show')->name('show');
    Route::get('/destroy/{id}','CategoryController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});


Route::group([
    'prefix'=>'admin/vouchers',
    'as'=>'admin/vouchers.','middleware'=>'Checklogin'
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','VoucherController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','VoucherController@create')->name('create');//tạo mới
    Route::post('/store','VoucherController@store')->name('store');//lưu trữ một tài nguyên mới
    Route::get('/edit/{id}','VoucherController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    Route::post('/update/{id}','VoucherController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    Route::get('/show','VoucherController@show')->name('show');
    Route::get('/destroy/{id}','VoucherController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});

// Route::group([
//     'prefix'=>'slider',
//     'as'=>'slider.',
//     // 'middleware'=> 'check_admin_role',
// ],function(){
//     Route::get('/','SliderController@index')->name('index');// hiển thị tất cả tài nguyên
//     // Route::get('/create','UserController@create')->name('create');//tạo mới
//     // Route::post('/store','UserController@store')->name('store');//lưu trữ một tài nguyên mới
//     // Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
//     // Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
//     // Route::get('/show','UserController@show')->name('show');
//     // Route::post('/destroy/{id}','UserController@destroy')->name('destroy');//xóa 1 tài nguyên
    
// });


Route::group([
    'prefix'=>'settings_system',
    'as'=>'settings_system.','middleware'=>'Checklogin'
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','Settings_systemController@index')->name('index');// hiển thị tất cả tài nguyên
    // Route::get('/create','UserController@create')->name('create');//tạo mới
    // Route::post('/store','UserController@store')->name('store');//lưu trữ một tài nguyên mới
    // Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    // Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    // Route::get('/show','UserController@show')->name('show');
    // Route::post('/destroy/{id}','UserController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});

// Auth::routes();

