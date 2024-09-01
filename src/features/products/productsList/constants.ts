import { type ProductOrderByInput } from "@/graphql/generated/graphql";

export const sortOptions: Array<{ name: string; value: ProductOrderByInput }> = [
	{
		name: "Newest",
		value: "createdAt_DESC",
	},
	{
		name: "Best Rating",
		value: "rating_DESC",
	},
	{
		name: "Price: Low to High",
		value: "price_ASC",
	},
	{
		name: "Price: High to Low",
		value: "price_DESC",
	},
] as const;

export const priceRangeLimits: [number, number] = [0, 20000] as const;
