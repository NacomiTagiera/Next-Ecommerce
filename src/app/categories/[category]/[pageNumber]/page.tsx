import { type Metadata } from "next";

import { getCategoriesList, getCategoryBySlug } from "@/api/categories";
import { getProductsCount } from "@/api/products";
import { PRODUCTS_PAGE_SIZE } from "@/lib/constants";

export const generateStaticParams = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}) => {
	const categories = await getCategoriesList();
	const productsCount = await getProductsCount([params.category]);
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PAGE_SIZE);

	const result = [];

	for (let index = 0; index < numberOfPages; index++) {
		for (const category of categories) {
			result.push({
				pageNumber: `${index + 1}`,
				category: category.slug,
			});
		}
	}

	return result;
};

export const generateMetadata = async ({
	params,
}: {
	params: { category: string; pageNumber: string };
}): Promise<Metadata> => {
	const category = await getCategoryBySlug(params.category);

	return {
		title: category?.name,
		description: category?.description,
	};
};

export default function CategoryPage() {
	return <div>page</div>;
}
