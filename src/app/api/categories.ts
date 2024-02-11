import { CategoriesGetListDocument, CategoryGetBySlugDocument } from "@/graphql/generated/graphql";
import { paginationArgs } from "@/lib/utils";

import { executeGraphql } from "./graphqlApi";

export const getCategoriesList = async (includeImg?: boolean) => {
	const res = await executeGraphql({
		query: CategoriesGetListDocument,
		variables: { includeImg },
	});

	return res.categories;
};

export const getCategoryBySlug = async (slug: string, page: number) => {
	const { category } = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: { slug, ...paginationArgs(page) },
	});

	return category;
};
