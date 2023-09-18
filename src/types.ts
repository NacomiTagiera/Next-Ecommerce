export type Product = {
	id: string;
	name: string;
	price: number;
	image: string;
	category: string;
	description: string;
	rating: {
		rate: number;
		count: number;
	};
	longDescription: string;
};
