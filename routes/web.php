<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });



 Route::get('/','HomeController@index')->name('admin');


 Route::group([
    'prefix'=>'users',
    'as'=>'users.',
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','UserController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','UserController@create')->name('create');//tạo mới
    Route::post('/store','UserController@store')->name('store');//lưu trữ một tài nguyên mới
    Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    Route::get('/show','UserController@show')->name('show');
    Route::get('/destroy/{id}','UserController@destroy')->name('destroy');//xóa 1 tài nguyên
});

Route::group([
    'prefix'=>'orders',
    'as'=>'orders.',
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','OrderController@index')->name('index');// hiển thị tất cả tài nguyên
    // Route::get('/create','UserController@create')->name('create');//tạo mới
    // Route::post('/store','UserController@store')->name('store');//lưu trữ một tài nguyên mới
    // Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    // Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    Route::get('/show','OrderController@show')->name('show');
    Route::get('/destroy/{id}','OrderController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});

Route::group([
    'prefix'=>'contacts',
    'as'=>'contacts.',
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','ContactController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','ContactController@create')->name('create');//tạo mới
    Route::post('/store','ContactController@store')->name('store');//lưu trữ một tài nguyên mới
    // Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    // Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    // Route::get('/show','UserController@show')->name('show');
    Route::get('/destroy/{id}','ContactController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});


Route::group([
    'prefix'=>'comments',
    'as'=>'comments.',
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','CommentController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','CommentController@create')->name('create');//tạo mới
    Route::post('/store','CommentController@store')->name('store');//lưu trữ một tài nguyên mới
    // Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    // Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    // Route::get('/show','UserController@show')->name('show');
    Route::get('/destroy/{id}','CommentController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});


Route::group([
    'prefix'=>'brands',
    'as'=>'brands.',
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','BrandController@index')->name('index');// hiển thị tất cả tài nguyên
    Route::get('/create','BrandController@create')->name('create');//tạo mới
    Route::post('/store','BrandController@store')->name('store');//lưu trữ một tài nguyên mới
    // Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    // Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    // Route::get('/show','UserController@show')->name('show');
    Route::get('/destroy/{id}','BrandController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});

Route::group([
    'prefix'=>'products',
    'as'=>'products.',
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','ProductController@index')->name('index');// hiển thị tất cả tài nguyên
    // Route::get('/create','UserController@create')->name('create');//tạo mới
    // Route::post('/store','UserController@store')->name('store');//lưu trữ một tài nguyên mới
    // Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    // Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    // Route::get('/show','UserController@show')->name('show');
    Route::get('/destroy/{id}','ProductController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});


Route::group([
    'prefix'=>'categories',
    'as'=>'categories.',
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','CategoryController@index')->name('index');// hiển thị tất cả tài nguyên
    // Route::get('/create','UserController@create')->name('create');//tạo mới
    // Route::post('/store','UserController@store')->name('store');//lưu trữ một tài nguyên mới
    // Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    // Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    // Route::get('/show','UserController@show')->name('show');
    Route::get('/destroy/{id}','CategoryController@destroy')->name('destroy');//xóa 1 tài nguyên
    
});


Route::group([
    'prefix'=>'vouchers',
    'as'=>'vouchers.',
    // 'middleware'=> 'check_admin_role',
],function(){
    Route::get('/','VoucherController@index')->name('index');// hiển thị tất cả tài nguyên
    // Route::get('/create','UserController@create')->name('create');//tạo mới
    // Route::post('/store','UserController@store')->name('store');//lưu trữ một tài nguyên mới
    // Route::get('/edit/{id}','UserController@edit')->name('edit');// sửa một tài nguyên theo tham số truyền vào
    // Route::post('/update/{id}','UserController@update')->name('update');//cập nhật 1 tài nguyên theo tham số truyền vào
    // Route::get('/show','UserController@show')->name('show');
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
    'as'=>'settings_system.',
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



