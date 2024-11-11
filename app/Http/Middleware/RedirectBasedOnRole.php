<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class RedirectBasedOnRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $account = $request->user(); // Assuming user is authenticated and account information is available

        if ($account) {
            switch ($account->role) {
                case 'admin':
                    return Inertia::location(route('dashboard'));
                default:
                    return Inertia::location(route('cashier'));
            }
        }


        return $next($request);
    }
}
