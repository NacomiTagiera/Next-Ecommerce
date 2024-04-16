import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/categories/(.*)",
		"/collections/(.*)",
		"/product/(.*)",
		"/products/(.*)",
		"/terms-of-service",
		"/privacy-policy",
	],
	ignoredRoutes: ["/api/(.*)"],
});

export const config = {
	matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
