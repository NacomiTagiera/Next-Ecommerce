import { executeGraphql } from "./graphqlApi";
import { CategoriesGetListDocument, CategoryGetBySlugDocument } from "@/gql/graphql";

export const getCategoriesList = async () => {
	const res = await executeGraphql({ query: CategoriesGetListDocument });

	return res.categories;
};

export const getCategoryBySlug = async (slug: string) => {
	const res = await executeGraphql({ query: CategoryGetBySlugDocument, variables: { slug } });

	return res.category;
};
