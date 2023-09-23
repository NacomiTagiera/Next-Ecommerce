import {
	CategoriesGetListDocument,
	CollectionsGetListDocument,
	ProductGetBySlugDocument,
	ProductGetListDocument,
	ProductsGetRelatedDocument,
} from "@/gql/graphql";
import { PRODUCTS_PAGE_SIZE } from "@/lib/constants";
import { executeGraphql } from "@/lib/executeGraphql";

export const getAllProducts = async (page: number) => {
	const {
		products,
		productsConnection: {
			aggregate: { count },
		},
	} = await executeGraphql(ProductGetListDocument, {
		first: PRODUCTS_PAGE_SIZE,
		skip: (page - 1) * PRODUCTS_PAGE_SIZE,
	});

	return { products, count };
};

export const getProductBySlug = async (slug: string) => {
	const res = await executeGraphql(ProductGetBySlugDocument, { slug: slug });

	return res.product;
};

export const getRelatedProducts = async (productSlug: string, categoriesSlugs: string[]) => {
	const res = await executeGraphql(ProductsGetRelatedDocument, {
		slug: productSlug,
		categoriesSlugs,
	});

	return res.products;
};

export const getAllCategories = async () => {
	const res = await executeGraphql(CategoriesGetListDocument);

	return res.categories;
};

export const getAllCollections = async () => {
	const res = await executeGraphql(CollectionsGetListDocument);

	return res.collections;
};
