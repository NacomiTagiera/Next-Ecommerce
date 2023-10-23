import { executeGraphql } from "./graphqlApi";
import { CategoriesGetListDocument, CategoryGetBySlugDocument } from "@/graphql/generated/graphql";
import { paginationArgs } from "@/lib/utils";

export const getCategoriesList = async () => {
	const res = await executeGraphql({ query: CategoriesGetListDocument });

	return res.categories;
};

export const getCategoryBySlug = async (slug: string, page: number) => {
	const { category } = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: { slug, ...paginationArgs(page) },
	});

	return category;
};
