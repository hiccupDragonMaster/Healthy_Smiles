<?php

namespace App\Http\Controllers;

use App\Models\PetGender;
use App\Models\PetAge;
use App\Models\PetSize;
use App\Models\Breed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{

    public function getGender(Request $request)
    {
        $authToken = $request->input('authToken');
        if (!$authToken) {
            return response()->json(['message'=>'Fail', 'result'=>'Access was made illegally.']);
        } else {
            $gender = PetGender::all();
            return response()->json(['message'=>'Successful', 'data'=>$gender]);
        }
    }

    public function getAge(Request $request)
    {
        $authToken = $request->input('authToken');
        if (!$authToken) {
            return response()->json(['message'=>'Fail', 'result'=>'Access was made illegally.']);
        } else {
            $age = PetAge::all();
            return response()->json(['message'=>'Successful', 'data'=>$age]);
        }
    }

    public function getSize(Request $request)
    {
        $authToken = $request->input('authToken');
        if (!$authToken) {
            return response()->json(['message'=>'Fail', 'result'=>'Access was made illegally.']);
        } else {
            $size = PetSize::all();
            return response()->json(['message'=>'Successful', 'data'=>$size]);  
        }
    }

    public function getBreed(Request $request)
    {
        $authToken = $request->input('authToken');
        if (!$authToken) {
            return response()->json(['message'=>'Fail', 'result'=>'Access was made illegally.']);
        } else {
            $breed = Breed::where('pet_type_id', $request->input('id'))->get();
            return response()->json(['message'=>'Successful', 'data'=>$breed]);
        }
    }

}