import { type Route } from "next";

export const navLinks: { text: string; href: Route; exact: boolean }[] = [
	{ text: "Home", href: "/", exact: true },
	{ text: "All", href: "/products", exact: false },
];
