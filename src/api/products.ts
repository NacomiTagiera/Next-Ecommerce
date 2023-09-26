import { executeGraphql } from "@/api/graphqlApi";
import {
	ProductGetBySlugDocument,
	ProductGetListDocument,
	ProductsGetBySearchDocument,
	ProductsGetCountDocument,
	ProductsGetCountInCategoryDocument,
	ProductsGetCountInCollectionDocument,
	ProductsGetRelatedDocument,
} from "@/gql/graphql";
import { paginationArgs } from "@/lib/utils";

export const getProductsList = async (page: number) => {
	const { products } = await executeGraphql({
		query: ProductGetListDocument,
		variables: paginationArgs(page),
	});

	return products;
};

export const getProductBySlug = async (slug: string) => {
	const res = await executeGraphql({ query: ProductGetBySlugDocument, variables: { slug } });

	return res.product;
};

export const getRelatedProducts = async (productSlug: string, categoriesSlugs: string[]) => {
	const res = await executeGraphql({
		query: ProductsGetRelatedDocument,
		variables: {
			slug: productSlug,
			categoriesSlugs,
		},
	});

	return res.products;
};

export const getProductsBySearch = async (query: string) => {
	const res = await executeGraphql({
		query: ProductsGetBySearchDocument,
		variables: {
			search: query,
		},
	});

	return res.products;
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
