<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::paginate(7);
        $role =[
            0 =>'Thành Viên',
            1 =>'Nhân Viên',
            10 =>'Quản Trị Viên Tối Cao'
        ];
        $status =[
            -5 =>'Khóa vĩnh viễn',
            -3=>'Khóa 1 tháng',
            -1 =>'Chưa kích hoạt',
             0 =>'Kích hoạt',
            
        ];
        // foreach ($users as $user) {
        //     $user->posts;
        // }
        // $users->toArray();
        return view('admin.users.index', ['users' => $users,'role' => $role,'status'=>$status]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.users.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $request->all();
        $user = User::create([
            'name' => $data['name'],
            'avatar' => $data['avatar'],
            'email' => $data['email'],
            'password' => bcrypt(''),
            'role' => $data['role'],
            'status' => $data['status']

        ]);


        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show ($id)
    {
        $user = User::find($id);
        return $user;
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response 
     */
    public function edit($id)
    {   
        $role =[
            0 =>'Thành Viên',
            1 =>'Nhân Viên',
            10 =>'Quản Trị Viên Tối Cao'
        ];
        $status =[
            -5 =>'Khóa vĩnh viễn',
            -3=>'Khóa 1 tháng',
            -1 =>'Chưa kích hoạt',
             0 =>'Kích hoạt',
            
        ];
        $user = User::find($id);
        return view('admin.users.edit', [
            'user' => $user,'role'=>$role,'status'=>$status
        ]);
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
        $user = User::find($id);
        $user->update([
            'role' => $request->role,
            'status' => $request->status,
        ]);

        return redirect()->route('admin/users.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::destroy($id);
        return redirect()->route('admin/users.index');
    }
}
