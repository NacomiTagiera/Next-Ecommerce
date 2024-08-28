import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionHeader } from "@/components/UI/SectionHeader";
import {
	getCategoryBySlug,
	getProductsCountInCategory,
} from "@/features/categories/api/fetchQueries";
import { Pagination } from "@/features/products/productsList/components/Pagination";
import { ProductList } from "@/features/products/productsList/components/ProductsList";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";
import { parseSearchParams } from "@/lib/utils";
import { type PageProps } from "@/types";

interface Props extends PageProps {
	params: {
		category: string;
		pageNumber: string;
	};
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const page = parseInt(params.pageNumber, 10) || 1;
	const category = await getCategoryBySlug(params.category, parseSearchParams({}, page));

	return {
		title: category?.name,
		description: category?.description,
	};
};

export default async function CategoryPage({ params, searchParams }: Props) {
	const page = parseInt(params.pageNumber, 10) || 1;
	const parsedParams = parseSearchParams(searchParams, page);

	const category = await getCategoryBySlug(params.category, parsedParams);
	const productsCount = await getProductsCountInCategory(params.category, parsedParams);

	if (!category?.products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<div className="border-b border-zinc-300 pb-10 pt-24">
				<SectionHeader
					title={category.name}
					description={`Check out our ${category.name}. Get what you need to stay active and stylish!`}
					id="products-heading"
					className="mb-0"
					headerClassName="text-4xl capitalize"
					Tag="h1"
				/>
			</div>
			<div className="pb-24 pt-10">
				<ProductList products={category.products} />
				<Pagination
					numberOfPages={numberOfPages}
					baseUrl={`/categories/${category.slug}`}
					searchParams={searchParams}
				/>
			</div>
		</>
	);
}
