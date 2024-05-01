import { executeGraphql } from "@/app/api/graphqlApi";
import {
	ProductGetByIdDocument,
	ProductGetBySlugDocument,
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
		next: {
			revalidate: 60 * 10, // 10 mins
		},
	});

	return products;
};

export const getProductByIdOrSlug = async (params: { id?: string; slug?: string } = {}) => {
	let product;

	if (params.id) {
		const res = await executeGraphql({
			query: ProductGetByIdDocument,
			variables: { id: params.id },
			next: {
				revalidate: 60 * 10,
			},
		});
		product = res.product;
	} else if (params.slug) {
		const res = await executeGraphql({
			query: ProductGetBySlugDocument,
			variables: { slug: params.slug },
			next: {
				revalidate: 60 * 10,
			},
		});
		product = res.product;
	}

	if (!product) {
		throw new Error("Product not found");
	}

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
