import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const authToken = request.cookies.get('authToken')?.value;
    const role = request.cookies.get('role')?.value;

    if (request.nextUrl.pathname === '/api/login' || request.nextUrl.pathname === '/api/signup') {
        return;
    }

    const loggedInUserNotAccessPath = ['/login', '/signup', '/'].includes(request.nextUrl.pathname);
    if (loggedInUserNotAccessPath) {
        if (authToken) {
            return NextResponse.redirect(new URL(`/${role}`, request.url));
        }
    } else {
        if (!authToken) {
            return NextResponse.redirect(new URL(`/`, request.url));
        }
    }
    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/login', '/signup', '/admin', '/hr', '/customer', '/hr/:path*', '/admin/:path*', '/customer/:path*', '/api/:path*'],
};
