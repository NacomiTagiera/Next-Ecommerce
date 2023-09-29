import { type Route } from "next";
import { Facebook, Github, Linkedin } from "lucide-react";

export const PRODUCTS_PER_PAGE = 4;

export const navLinks: { text: string; href: Route; exact: boolean }[] = [
	{ text: "Home", href: "/", exact: true },
	{ text: "All", href: "/products", exact: false },
];

export const socials = [
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/in/jakub-pawlak-frontend-dev",
		name: "LinkedIn",
	},
	{
		icon: Github,
		href: "https://github.com/NacomiTagiera",
		name: "GitHub",
	},
	{
		icon: Facebook,
		href: "https://www.facebook.com/kubapawlak123321",
		name: "Facebook",
	},
];

export const restOfFooterLinks = [
	{
		header: "Company",
		items: [
			{
				name: "About us",
				slug: "about-us",
			},
			{
				name: "Contact",
				slug: "contact",
			},
			{
				name: "FAQs",
				slug: "faqs",
			},
		],
	},
	{
		header: "Legal",
		items: [
			{
				name: "Terms & Conditions",
				slug: "terms-of-service",
			},
			{
				name: "Privacy Policy",
				slug: "privacy-policy",
			},
			{
				name: "Cookies",
				slug: "cookies",
			},
		],
	},
];
