import { type Route } from "next";

export const PRODUCTS_PER_PAGE = 4;

export const productBrands = [
	{
		name: "Nike",
		value: "Nike",
	},
	{
		name: "Adidas",
		value: "Adidas",
	},
	{
		name: "Puma",
		value: "Puma",
	},
	{
		name: "New Balance",
		value: "NB",
	},
	{
		name: "Reebok",
		value: "Reebok",
	},
	{
		name: "Asics",
		value: "Asics",
	},
] as const;

export const productColors = [
	"Gray",
	"White",
	"Pink",
	"Green",
	"Blue",
	"Black",
	"Orange",
	"Red",
	"Yellow",
	"Purple",
];

export const productSizes = [
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"36",
	"37",
	"38",
	"39",
	"40",
	"41",
	"42",
	"43",
	"44",
	"45",
];

export const ratings = [
	{ stars: 5, ratingGt: 4.5, ratingLt: 5 },
	{ stars: 4, ratingGt: 3.5, ratingLt: 4.49 },
	{ stars: 3, ratingGt: 2.5, ratingLt: 3.49 },
	{ stars: 2, ratingGt: 1.5, ratingLt: 2.49 },
	{ stars: 1, ratingGt: 0.5, ratingLt: 1.49 },
	{ stars: 0, ratingGt: 0, ratingLt: 0.49 },
];

export const navLinks: { text: string; href: Route }[] = [
	{ text: "Home", href: "/" },
	{ text: "All", href: "/products" },
] as const;

export const testimonials = [
	{
		body: "The attention to detail in both design and functionality is unparalleled. I'm a customer for life!",
		author: {
			name: "Mark Wilson",
			handle: "markwilson",
			imageUrl:
				"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "From yoga sessions to intense cardio workouts, I rely on Next Sports for all my activewear needs.",
		author: {
			name: "Abigail Walker",
			handle: "abigailwalker",
			imageUrl:
				"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "Whether I'm running errands or sweating it out at the gym, I always feel confident and stylish.",
		author: {
			name: "Steven Lewis",
			handle: "stevenlewis",
			imageUrl:
				"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "The most comfortable hoodies I've ever worn. They keep me warm and cozy on chilly nights.",
		author: {
			name: "Marie Edwards",
			handle: "marieedwards",
			imageUrl:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "The fabrics are durable, the designs are on point, and the comfort level is unmatched.",
		author: {
			name: "Brandon Jones",
			handle: "brandonjones",
			imageUrl:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "I love the quality of the fabrics and the design. It's so stylish and comfortable to wear.",
		author: {
			name: "Anne Alexander",
			handle: "annealexander",
			imageUrl:
				"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "The quality of the materials—it's clear that this brand is committed to excellence.",
		author: {
			name: "Tom Stevens",
			handle: "tomstevens",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "I just love the new summer collection. The colors are so vibrant and the fabrics are so light.",
		author: {
			name: "Lily Campbell",
			handle: "lilycampbell",
			imageUrl:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "Not only do I feel comfortable during my workouts, but I also feel stylish and put together.",
		author: {
			name: "David Robinson",
			handle: "davidrobinson",
			imageUrl:
				"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
