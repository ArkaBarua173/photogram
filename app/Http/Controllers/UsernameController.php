<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UsernameController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/UsernameCreate');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'username' => ['required', 'string', 'max:255', 'regex:/[0-9]/', 'unique:' . User::class],
        ]);

        $socialUser = $request->session()->pull('suser', 'default');

        $user = User::create([
            'name' => $socialUser->name,
            'username' => $request->username,
            'email' => $socialUser->email,
            'avatar' => $socialUser->avatar,
            'provider_token' => $socialUser->token,
            'provider_refresh_token' => $socialUser->refreshToken,
        ]);

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
