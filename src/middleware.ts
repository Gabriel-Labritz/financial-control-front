import { NextResponse } from 'next/server';
import type { MiddlewareConfig, NextRequest } from 'next/server';
import { verifyJwtExpired } from './utils/verify_jwt_expired';

const publicRoutes = [
  {
    path: '/signin',
    whenAuthenticated: 'redirect',
  },
  {
    path: '/signup',
    whenAuthenticated: 'redirect',
  },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/signin';

export function middleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname; 
  const publicRoute = publicRoutes.find((route) => route.path === pathName);
  const token = request.cookies.get('jwt')?.value;

  if(!token && publicRoute) {
    return NextResponse.next();
  }

  if(!token && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if(token && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/';
    return NextResponse.redirect(redirectUrl);
  }

  if(token && !publicRoute && verifyJwtExpired(token)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}
 
export const config: MiddlewareConfig = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.js$).*)"],
};