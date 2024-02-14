import { LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";

import { type Route } from "next";

export const PRODUCTS_PER_PAGE = 4;

export const navLinks: { text: string; href: Route }[] = [
	{ text: "Home", href: "/" },
	{ text: "All", href: "/products" },
] as const;

export const testimonials = [
	{
		body: "This is the most comfortable hoodie I've ever worn. It keeps me warm and cozy on chilly nights.",
		author: {
			name: "Marie Edwards",
			handle: "marieedwards",
			imageUrl: "/images/testimonials/marie-edwards.jpg",
		},
	},
	{
		body: "I love the quality of the fabrics and the design. It's so stylish and comfortable to wear.",
		author: {
			name: "Brandon Jones",
			handle: "brandonjones",
			imageUrl: "/images/testimonials/brandon-jones.jpg",
		},
	},
	{
		body: "I just love the new summer collection. The colors are so vibrant and the fabrics are so light.",
		author: {
			name: "Leslie Alexander",
			handle: "lesliealexander",
			imageUrl: "/images/testimonials/leslie-alexander.jpg",
		},
	},
	{
		body: "This is the most comfortable hoodie I've ever worn. It keeps me warm and cozy on chilly nights.",
		author: {
			name: "Marie Edwards",
			handle: "marieedwards",
			imageUrl: "/images/testimonials/marie-edwards.jpg",
		},
	},
	{
		body: "I love the quality of the fabrics and the design. It's so stylish and comfortable to wear.",
		author: {
			name: "Brandon Jones",
			handle: "brandonjones",
			imageUrl: "/images/testimonials/brandon-jones.jpg",
		},
	},
	{
		body: "I just love the new summer collection. The colors are so vibrant and the fabrics are so light.",
		author: {
			name: "Leslie Alexander",
			handle: "lesliealexander",
			imageUrl: "/images/testimonials/leslie-alexander.jpg",
		},
	},
	{
		body: "This is the most comfortable hoodie I've ever worn. It keeps me warm and cozy on chilly nights.",
		author: {
			name: "Marie Edwards",
			handle: "marieedwards",
			imageUrl: "/images/testimonials/marie-edwards.jpg",
		},
	},
	{
		body: "I love the quality of the fabrics and the design. It's so stylish and comfortable to wear.",
		author: {
			name: "Brandon Jones",
			handle: "brandonjones",
			imageUrl: "/images/testimonials/brandon-jones.jpg",
		},
	},
	{
		body: "I just love the new summer collection. The colors are so vibrant and the fabrics are so light.",
		author: {
			name: "Leslie Alexander",
			handle: "lesliealexander",
			imageUrl: "/images/testimonials/leslie-alexander.jpg",
		},
	},
] as const;

export const incentives = [
	{
		name: "Free delivery",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
		description:
			"Free shipping on all orders over $100.00. We're not kidding. No purchase necessary.",
	},
	{
		name: "2-year warranty",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
		description:
			"If it breaks in the first 2 years we will replace it. Unless you break it on purpose. Then we won't.",
	},
	{
		name: "Free returns",
		imageSrc: "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
		description: "Return it within 30 days for any reason. We'll even pay for the return shipping.",
	},
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
