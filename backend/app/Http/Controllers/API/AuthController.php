<?php
/*
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response(['user' => $user, 'message' => 'User registered successfully!']);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!auth()->attempt($request->only('email', 'password'))) {
            return response(['message' => 'Invalid credentials'], 401);
        }

        return response(['user' => auth()->user()]);
    }
}
*/

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\ValidationException;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // $request->validate([
        //     'first_name' => 'required',
        //     'last_name' => 'required',
        //     'email' => 'required|email|unique:users',
        //     'password' => 'required|confirmed',
        // ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response(['message' => 'Register Successful']);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // if (!auth()->attempt($request->only('email', 'password'))) {
        //     return response(['message' => 'Invalid credentials'], 401);
        // }

        // $token = $user->createToken('authToken');

        // Get the user data as an array
        // $userData = auth()->user()->toArray();

        // Add the access_token to the user data
        // $userData['access_token'] = $token;

        $user = User::where('email', $credentials['email'])->first();
        if ($user) {
            if(Crypt::decrypt($user->password) == $credentials['password']){
                Session::put('user', $user);
                $token = Str::random(60);
                $userData = $user;
                $userData['access_token'] = $token;

                return response()->json([
                    'success' => true,
                    'user' => $user,
                    'message' => 'Login successful',
                ], Response::HTTP_OK);
            }else{
                return response()->json([
                    'success' => false,
                    'message' => 'Password is incorrect',
                ], 401);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'No registered user',
            ], 401);
        }
    }

    public function refreshToken(Request $request)
    {
        // Assuming you have some way to validate a refresh token
        $refreshToken = $request->input('refresh_token');
        if ($this->isValidRefreshToken($refreshToken)) {
            $user = auth()->user();
            $newToken = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'access_token' => $newToken,
            ]);
        } else {
            return response()->json(['message' => 'Invalid refresh token'], 401);
        }
    }
}