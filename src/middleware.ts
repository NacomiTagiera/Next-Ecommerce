import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const protectedRoutes = createRouteMatcher(["/checkout", "/orders", "/profile"]);

export default clerkMiddleware((auth, req) => {
	if (protectedRoutes(req)) {
		auth().protect();
	}

	return NextResponse.next();
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
