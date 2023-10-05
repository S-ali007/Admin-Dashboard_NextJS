import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  // console.log("Middleware run successfully ", req.nextUrl.pathname);

  const authToken = req.cookies.get("userToken")?.value;
  // console.log(authToken)
  if (authToken && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } else if (!authToken && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
