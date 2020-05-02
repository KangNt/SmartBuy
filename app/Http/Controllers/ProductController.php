<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use Validator;
class ProductController extends Controller
{

    public function index()
    {
        $products = Product::paginate(5);
        return view('admin.products.index', ['products' => $products]);
    }

    public function create()
    {
        return view('admin.products.create');
    }
    public function store(Request $request)
    {   

        $rules =[
            'name'=>'required|unique:products,name',
            'image'=>'required',
            'price'=>'required', 
            'cate_id'=>'required',  
            'amount'=>'required',  


        ];
        $msg = [
            'name.required'=>"Tên sản phẩm không được để trống",
            'name.unique'=>"Tên sản phẩm đã tồn tại",
            'image'=>"Ảnh sản phẩm không được để trống",
            'price.required'=>"Giá sản phẩm không được để trống",
            'cate_id.required'=>'Danh mục không được để trống',
            'amount.required'=>'Số lượng không được để trống',
        ];
        
        $validator = Validator::make($request->except('_token'),$rules,$msg);
        if($validator->fails()){
            return view('admin.products.create')->withErrors($validator);
        }
        else{
            $filename = $request->file('image')->getClientOriginalName();
            $filename = str_replace(' ', '-', $filename);
            $path = $request->file('image')->move('images/',$filename);
            $image=url('images/'.$filename);
            $Addproduct = Product::insert(
                [
                    'name'=>$request->name,
                    'image'=>$image,
                    "price"=>$request->price,
                    "cate_id"=>$request->cate_id,
                    "sale_off"=>$request->sale_off,
                    "amount"=>$request->amount,
                    "rating"=>$request->rating,
                    "views"=>$request->views,
                    "status"=>$request->status,
                    "disabled_comment"=>$request->disabled_comment,
                ]
            );
            return redirect()->route('admin/products.index');
        }

    }
    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }
    public function edit($id)
    {
        $product = Product::find($id);
        return view('admin.products.edit', [
            'product' => $product,
        ]);
    }
    public function update(Request $request, $id)
    {
        $editPros = Product::find($id);
        $editPros->fill($request->all());
        if($request->hasFile('image')){
            $filename = $request->file('image')->getClientOriginalName();
            $filename = str_replace(' ', '-', $filename);
            $path = $request->file('image')->move(public_path('images/'),$filename);
            $image=url('images/'.$filename);
            echo $image;
            $editPros->image=$image;
            
        }
        $editPros->save();

        return redirect()->route('admin/products.index');
    }
    public function destroy($id)
    {
        Product::destroy($id);
        return redirect()->route('admin/products.index');
    }
}
