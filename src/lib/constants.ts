import { type Route } from "next";
import { AiFillFacebook, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const PRODUCTS_PAGE_SIZE = 4;

export const navLinks: { text: string; href: Route; exact: boolean }[] = [
	{ text: "Home", href: "/", exact: true },
	{ text: "All", href: "/products", exact: false },
];

export const socials = [
	{
		icon: AiFillLinkedin,
		href: "https://www.linkedin.com/in/jakub-pawlak-frontend-dev",
		name: "LinkedIn",
	},
	{
		icon: AiOutlineGithub,
		href: "https://github.com/NacomiTagiera",
		name: "GitHub",
	},
	{
		icon: AiFillFacebook,
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
