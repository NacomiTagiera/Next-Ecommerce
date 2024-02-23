import type {
	CategoryListItemFragment,
	CollectionListItemFragment,
	ProductColorVariantFragment,
	ProductDetailsFragment,
	ProductSizeVariantFragment,
} from "./graphql/generated/graphql";

export type ProductProps = {
	product: ProductDetailsFragment;
};

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

export type VariantsType = ProductColorVariantFragment[] | ProductSizeVariantFragment[];
