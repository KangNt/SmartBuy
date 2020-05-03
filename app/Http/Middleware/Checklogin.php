<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Closure;

class Checklogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   
        $checkLog = Auth::check();
        $checkUser =$request->user();
        if (!$checkLog) {
            return redirect()->route('login')->with('errRole','Không có quyền truy cập');
        }
        if ($checkUser->role == 1) {
            Auth::logout();
            return redirect()->route('login')->with('errRole','Không có quyền truy cập');
        }
        
        return $next($request);
    }
}
