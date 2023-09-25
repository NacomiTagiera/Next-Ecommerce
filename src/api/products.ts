import {
	ProductGetBySlugDocument,
	ProductGetListDocument,
	ProductsGetCountDocument,
	ProductsGetRelatedDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { PRODUCTS_PAGE_SIZE } from "@/lib/constants";

export const getProductsList = async (page: number) => {
	const { products } = await executeGraphql({
		query: ProductGetListDocument,
		variables: {
			first: PRODUCTS_PAGE_SIZE,
			skip: (page - 1) * PRODUCTS_PAGE_SIZE,
		},
	});

	return products;
};

export const getProductBySlug = async (slug: string) => {
	const res = await executeGraphql({ query: ProductGetBySlugDocument, variables: { slug: slug } });

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

export const getProductsCount = async (categoriesSlugs?: string[], collectionsSlugs?: string[]) => {
	const res = await executeGraphql({
		query: ProductsGetCountDocument,
		variables: {
			categoriesSlugs,
			collectionsSlugs,
		},
	});

	return res.productsConnection.aggregate.count;
};
