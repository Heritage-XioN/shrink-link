import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';

// 1. Specify protected and public routes
const protectedRoutes = ['/dashboard/my-links', '/dashboard'];
const publicRoutes = [
	'/auth/login',
	'/auth/signup',
	'/',
	'/auth/forgot-password',
];

export default async function proxy(req: NextRequest) {
	// 2. Check if the current route is protected or public
	const path = req.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.includes(path);
	const isPublicRoute = publicRoutes.includes(path);

	// 3. Decrypt the session from the cookie
	const session = await getSession();

	// 4. Redirect to /login if the user is not authenticated
	if (isProtectedRoute && !session?.isLoggedin) {
		return NextResponse.redirect(new URL('/auth/login', req.nextUrl));
	}

	// 5. Redirect to /dashboard if the user is authenticated
	if (
		isPublicRoute &&
		session?.isLoggedin &&
		!req.nextUrl.pathname.startsWith('/dashboard')
	) {
		return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
	}

	return NextResponse.next();
}

// Routes proxy should not run on
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
