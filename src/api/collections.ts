import { executeGraphql } from "./graphqlApi";
import { CollectionGetBySlugDocument, CollectionsGetListDocument } from "@/gql/graphql";
import { paginationArgs } from "@/lib/utils";

export const getCollectionsList = async () => {
	const res = await executeGraphql({ query: CollectionsGetListDocument });

	return res.collections;
};

export const getCollectionBySlug = async (slug: string, page: number) => {
	const res = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: { slug, ...paginationArgs(page) },
	});

	return res.collection;
};
