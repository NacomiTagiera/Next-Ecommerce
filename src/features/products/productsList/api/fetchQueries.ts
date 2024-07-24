import {
	ProductGetListDocument,
	ProductsGetBySearchDocument,
	ProductsGetCountDocument,
} from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";
import { paginationArgs } from "@/lib/utils";

export const getProductsList = async (page: number) => {
	const { products } = await executeGraphql({
		query: ProductGetListDocument,
		variables: paginationArgs(page),
		next: {
			revalidate: 60 * 10, // 10 mins
		},
	});

	return products;
};

export const getProductsBySearch = async (query: string) => {
	const { products } = await executeGraphql({
		query: ProductsGetBySearchDocument,
		variables: {
			search: query,
		},
	});

	return products;
};

export const getProductsCount = async () => {
	const res = await executeGraphql({
		query: ProductsGetCountDocument,
	});

	return res.productsConnection.aggregate.count;
};
