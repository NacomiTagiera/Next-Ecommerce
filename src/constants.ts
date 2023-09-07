import { type ProductListItem } from "./types";

export const products: ProductListItem[] = [
	{
		id: "1",
		name: "Product 1",
		price: 4499,
		category: "Shapes",
		rating: 4.7,
		coverImage: {
			width: 256,
			height: 256,
			alt: "Product 1",
			src: "/images/t-shirt.png",
		},
	},
	{
		id: "2",
		name: "Product 2",
		price: 3999,
		category: "Shapes",
		rating: 3.5,
		coverImage: {
			width: 256,
			height: 256,
			alt: "Product 2",
			src: "/images/t-shirt.png",
		},
	},
	{
		id: "3",
		name: "Product 3",
		price: 7499,
		category: "Shapes",
		rating: 4.5,
		coverImage: {
			width: 256,
			height: 256,
			alt: "Product 3",
			src: "/images/t-shirt.png",
		},
	},
	{
		id: "4",
		name: "Product 4",
		price: 9999,
		category: "Shapes",
		rating: 5,
		coverImage: {
			width: 256,
			height: 256,
			alt: "Product 4",
			src: "/images/t-shirt.png",
		},
	},
];
