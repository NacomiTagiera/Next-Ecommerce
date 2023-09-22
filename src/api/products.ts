import {
	CategoriesGetListDocument,
	CollectionsGetListDocument,
	ProductGetBySlugDocument,
	ProductsGetListDocument,
	type ProductsListItemFragment,
} from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getAllProducts = async () => {
	const res = await executeGraphql(ProductsGetListDocument);

	return res.products;
};

export const getProductBySlug = async (slug: ProductsListItemFragment["slug"]) => {
	const res = await executeGraphql(ProductGetBySlugDocument, { slug: slug });

	return res.product;
};

export const getAllCategories = async () => {
	const res = await executeGraphql(CategoriesGetListDocument);

	return res.categories;
};

export const getAllCollections = async () => {
	const res = await executeGraphql(CollectionsGetListDocument);

	return res.collections;
};
