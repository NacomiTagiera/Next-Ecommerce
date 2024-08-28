import {
	CollectionGetBySlugDocument,
	CollectionsGetListDocument,
	ProductsGetCountInCollectionDocument,
} from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";
import { paginationArgs } from "@/lib/utils";
import { type ProductQueryParams } from "@/types";

export const getCollectionsList = async ({
	includeImg,
	includeDescription,
}: {
	includeImg?: boolean;
	includeDescription?: boolean;
}) => {
	const { collections } = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: { includeImg, includeDescription },
		next: {
			revalidate: 60 * 60 * 24, // 24 hours
		},
	});

	return collections;
};

export const getCollectionBySlug = async (slug: string, params: ProductQueryParams) => {
	const { collection } = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			collection: slug,
			...params,
			...paginationArgs(params.page),
		},
	});

	return collection;
};

export const getProductsCountInCollection = async (slug: string, params: ProductQueryParams) => {
	const res = await executeGraphql({
		query: ProductsGetCountInCollectionDocument,
		variables: {
			slug,
			...params,
			...paginationArgs(params.page),
		},
	});

	return res.productsConnection.aggregate.count;
};
