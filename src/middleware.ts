import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const protectedRoutes = createRouteMatcher(["/checkout", "/orders", "/profile"]);

export default clerkMiddleware((auth, req) => {
	const { userId } = auth();

	if (protectedRoutes(req) && !userId) {
		const signInUrl = new URL("/sign-in", req.url);
		return NextResponse.redirect(signInUrl);
	}

	return NextResponse.next();
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
