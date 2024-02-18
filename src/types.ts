import {
	type CategoryListItemFragment,
	type CollectionListItemFragment,
} from "./graphql/generated/graphql";

export type CategoryWithImage = CategoryListItemFragment & {
	image?:
		| {
				url: string;
		  }
		| null
		| undefined;
};

export type CollectionWithImage = CollectionListItemFragment & {
	image?:
		| {
				url: string;
		  }
		| null
		| undefined;
};
