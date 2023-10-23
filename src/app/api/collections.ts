import { executeGraphql } from "./graphqlApi";
import {
	CollectionGetBySlugDocument,
	CollectionsGetListDocument,
} from "@/graphql/generated/graphql";
import { paginationArgs } from "@/lib/utils";

export const getCollectionsList = async () => {
	const { collections } = await executeGraphql({ query: CollectionsGetListDocument });

	return collections;
};

export const getCollectionBySlug = async (slug: string, page: number) => {
	const { collection } = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: { slug, ...paginationArgs(page) },
	});

	return collection;
};
