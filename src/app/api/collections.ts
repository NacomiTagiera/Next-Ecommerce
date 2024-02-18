import {
	CollectionGetBySlugDocument,
	CollectionsGetListDocument,
} from "@/graphql/generated/graphql";
import { paginationArgs } from "@/lib/utils";

import { executeGraphql } from "./graphqlApi";

export const getCollectionsList = async (includeImg?: boolean, includeDescription?: boolean) => {
	const { collections } = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: { includeImg, includeDescription },
		next: {
			revalidate: 60 * 60 * 24, // 24 hours
		},
	});

	return collections;
};

export const getCollectionBySlug = async (slug: string, page: number) => {
	const { collection } = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: { slug, ...paginationArgs(page) },
	});

	return collection;
};
