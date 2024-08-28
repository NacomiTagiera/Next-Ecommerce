import {
	CategoriesGetListDocument,
	CategoryGetBySlugDocument,
	ProductsGetCountInCategoryDocument,
} from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";
import { paginationArgs } from "@/lib/utils";
import { type ProductQueryParams } from "@/types";

export const getCategoriesList = async ({ includeImg }: { includeImg?: boolean }) => {
	const { categories } = await executeGraphql({
		query: CategoriesGetListDocument,
		variables: { includeImg },
	});

	return categories;
};

export const getCategoryBySlug = async (slug: string, params: ProductQueryParams) => {
	const { category } = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: {
			category: slug,
			...params,
			...paginationArgs(params.page),
		},
	});

	return category;
};

export const getProductsCountInCategory = async (slug: string, params: ProductQueryParams) => {
	const res = await executeGraphql({
		query: ProductsGetCountInCategoryDocument,
		variables: {
			slug,
			...params,
			...paginationArgs(params.page),
		},
	});

	return res.productsConnection.aggregate.count;
};
