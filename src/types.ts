import type {
	CategoryListItemFragment,
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

export type VariantsType = ProductColorVariantFragment[] | ProductSizeVariantFragment[];

export type NavigationStructure = {
	navigation: {
		groupings: {
			name: string;
			featured: CategoryWithImage[];
		}[];
		pages: {
			text: string;
			href: string;
		}[];
	};
};
