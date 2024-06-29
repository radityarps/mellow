import {
  auth,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = ["/", "/sign-in", "/sign-up"];
const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware((auth, req) => {
  const { userId, orgId } = auth();
  const isPublic = isPublicRoute(req);
  const path = req.nextUrl.pathname;

  // Jika pengguna baru login (ada di rute publik tapi sudah punya userId)
  if (isPublic && userId) {
    const lastOrgRoute = req.cookies.get("lastOrgRoute")?.value;
    if (lastOrgRoute) {
      // Hapus cookie setelah digunakan
      const response = NextResponse.redirect(new URL(lastOrgRoute, req.url));
      response.cookies.delete("lastOrgRoute");
      return response;
    } else if (orgId) {
      return NextResponse.redirect(new URL(`/organization/${orgId}`, req.url));
    } else {
      return NextResponse.redirect(new URL("/select-org", req.url));
    }
  }

  // Jika pengguna tidak login dan di rute privat, arahkan ke sign-in
  if (!userId && !isPublic) {
    return auth().redirectToSignIn({ returnBackUrl: req.url });
  }

  // Jika pengguna login tapi belum memilih organisasi
  if (userId && !orgId && path !== "/select-org") {
    return NextResponse.redirect(new URL("/select-org", req.url));
  }

  // Jika pengguna di rute organisasi, simpan rute ini di cookie
  if (path.startsWith("/organization/")) {
    const response = NextResponse.next();
    response.cookies.set("lastOrgRoute", path, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60, // 30 hari
    });
    return response;
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
