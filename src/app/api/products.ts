import { executeGraphql } from "@/app/api/graphqlApi";
import {
	ProductGetByIdDocument,
	ProductGetListDocument,
	ProductsGetBySearchDocument,
	ProductsGetCountDocument,
	ProductsGetCountInCategoryDocument,
	ProductsGetCountInCollectionDocument,
	ProductsGetRelatedDocument,
} from "@/graphql/generated/graphql";
import { paginationArgs } from "@/lib/utils";

export const getProductsList = async (page: number) => {
	const { products } = await executeGraphql({
		query: ProductGetListDocument,
		variables: paginationArgs(page),
	});

	return products;
};

export const getProductById = async (id: string) => {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: { id },
	});

	return product;
};

export const getRelatedProducts = async (productSlug: string, categoriesSlugs: string[]) => {
	const { products } = await executeGraphql({
		query: ProductsGetRelatedDocument,
		variables: {
			slug: productSlug,
			categoriesSlugs,
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

export const getProductsCountInCategory = async (slug: string) => {
	const res = await executeGraphql({
		query: ProductsGetCountInCategoryDocument,
		variables: {
			slug,
		},
	});

	return res.productsConnection.aggregate.count;
};

export const getProductsCountInCollection = async (slug: string) => {
	const res = await executeGraphql({
		query: ProductsGetCountInCollectionDocument,
		variables: {
			slug,
		},
	});

	return res.productsConnection.aggregate.count;
};
