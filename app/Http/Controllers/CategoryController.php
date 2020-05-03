<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Validator;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return view('admin.categories.index', ['categories' => $categories]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.categories.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules =[
            'name'=>'required|unique:categories,cate_name',
            'description'=>'required',


        ];
        $msg = [
            'name.required'=>"Tên danh mục không được để trống",
            'name.unique'=>"Tên danh mục đã tồn tại",
            'description.required'=>'Mô tả không được để trống',
        ];
        
        $validator = Validator::make($request->except('_token'),$rules,$msg);
        if($validator->fails()){
            return redirect()->route('admin/categories.create')->withErrors($validator);
        }else{

            $Addcate = Category::insert(
                [
                    'cate_name'=>$request->name,
                    'description'=>$request->description,
                ]
            );
            return redirect()->route('admin/categories.index');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cateDetail = Category::find($id);
        return view('admin.categories.edit',['cateDetail'=>$cateDetail]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {   
        $checkCate = Category::where('cate_name',$request->name)->where('id','<>',$id)->first();
        
        // var_dump($checkCate);
        if($checkCate){
            return redirect()->route('admin/categories.edit',$id)->with('err','Tên danh mục đã tồn tại');
        }
        elseif($request->name==''){
            return redirect()->route('admin/categories.edit',$id)->with('err','Tên danh mục không được để trống');
        }
        else{
            return redirect()->route('admin/categories.index');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Category::destroy($id);
        return redirect()->route('admin/categories.index');
    }
}
