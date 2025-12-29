import { NextResponse } from 'next/server';
import { ADMIN_URL, AUTH_URL } from './constant/url';
import { cookies } from 'next/headers';
import { decrypt } from './lib/session';
import { USER_ROLE } from './constant/user-role';

const protectedRoutes = [ADMIN_URL.BASE, ADMIN_URL.CONTACTS];
const publicRoutes = [AUTH_URL.LOGIN, '/'];

export default async function proxy(req) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.user.id) {
    return NextResponse.redirect(new URL(AUTH_URL.LOGIN, req.nextUrl));
  }

  if (
    isPublicRoute &&
    session?.user.id &&
    session?.user.role != USER_ROLE.NORMAL_USER &&
    !req.nextUrl.pathname.startsWith(ADMIN_URL.BASE)
  ) {
    return NextResponse.redirect(new URL(ADMIN_URL.BASE, req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Proxy should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
