export type ProductListItem = {
	id: string;
	category: string;
	name: string;
	price: number;
	rating: number;
	coverImage: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
};
