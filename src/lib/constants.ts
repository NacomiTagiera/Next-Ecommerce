import { LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";

import { type Route } from "next";

export const PRODUCTS_PER_PAGE = 4;

export const navLinks: { text: string; href: Route }[] = [
	{ text: "Home", href: "/" },
	{ text: "All", href: "/products" },
] as const;

export const socials = [
	{
		Icon: LuLinkedin,
		href: "https://www.linkedin.com/in/jakub-pawlak-frontend-dev",
		name: "LinkedIn",
	},
	{
		Icon: LuGithub,
		href: "https://github.com/NacomiTagiera",
		name: "GitHub",
	},
	{
		Icon: LuFacebook,
		href: "https://www.facebook.com/kubapawlak123321",
		name: "Facebook",
	},
] as const;

export const footerLinks = [
	{
		header: "Company",
		items: [
			{
				name: "About us",
				href: "/about-us",
			},
			{
				name: "Contact",
				href: "/contact",
			},
			{
				name: "FAQs",
				href: "/faqs",
			},
		],
	},
	{
		header: "Legal",
		items: [
			{
				name: "Terms & Conditions",
				href: "/terms-of-service",
			},
			{
				name: "Privacy Policy",
				href: "/privacy-policy",
			},
			{
				name: "Cookies",
				href: "/cookies",
			},
		],
	},
];
