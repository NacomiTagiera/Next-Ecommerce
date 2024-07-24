import {
	CategoriesGetListDocument,
	CategoryGetBySlugDocument,
	ProductsGetCountInCategoryDocument,
} from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";
import { paginationArgs } from "@/lib/utils";

export const getCategoriesList = async ({ includeImg }: { includeImg?: boolean }) => {
	const { categories } = await executeGraphql({
		query: CategoriesGetListDocument,
		variables: { includeImg },
	});

	return categories;
};

export const getCategoryBySlug = async (slug: string, page: number) => {
	const { category } = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: { slug, ...paginationArgs(page) },
	});

	return category;
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
