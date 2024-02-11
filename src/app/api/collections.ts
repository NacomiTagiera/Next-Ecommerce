import {
	CollectionGetBySlugDocument,
	CollectionsGetListDocument,
} from "@/graphql/generated/graphql";
import { paginationArgs } from "@/lib/utils";

import { executeGraphql } from "./graphqlApi";

export const getCollectionsList = async (includeImg?: boolean) => {
	const { collections } = await executeGraphql({
		query: CollectionsGetListDocument,
		variables: { includeImg },
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
