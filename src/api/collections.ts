import { executeGraphql } from "./graphqlApi";
import { CollectionGetBySlugDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getCollectionsList = async () => {
	const res = await executeGraphql({ query: CollectionsGetListDocument });

	return res.collections;
};

export const getCollectionBySlug = async (slug: string) => {
	const res = await executeGraphql({ query: CollectionGetBySlugDocument, variables: { slug } });

	return res.collection;
};
