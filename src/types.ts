import type { CategoryListItemFragment, ProductOrderByInput } from "./graphql/generated/graphql";

export interface CategoryWithImage extends CategoryListItemFragment {
	// Category and Collection list item fragments are the same
	image?:
		| {
				url: string;
		  }
		| null
		| undefined;
}

export interface NavigationStructure {
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
}

export interface PageProps {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

export interface ProductQueryParams {
	priceGt: number;
	priceLt: number;
	ratingGt: number;
	ratingLt: number;
	colors: string[];
	sizes: string[];
	brand: string;
	orderBy?: ProductOrderByInput;
	page: number;
}
