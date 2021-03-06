<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class TestController extends Controller
{
    
    public function createUser(Request $request) {

        if($request->id == null) {
            return User::create([
                'name' => $request->name, 
                'email' => $request->email, 
                'password' => bcrypt($request->password), 
                'active' => User::ACTIVE 
            ]);
        } else {
            $user = User::find($request->id);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->save(); 
        }
    }

    public function listUsers() {
        return User::all();
    }

    public function deleteUser(Request $request) {
          $del = User::destroy($request->payload);
          return User::all();
        // return $request->all();
    }

}
