import type { CategoryListItemFragment } from "./graphql/generated/graphql";

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
