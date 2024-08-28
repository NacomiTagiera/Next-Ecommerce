import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionHeader } from "@/components/UI/SectionHeader";
import {
	getProductsBySearch,
	getProductsCountBySearch,
} from "@/features/products/productsList/api/fetchQueries";
import { Pagination } from "@/features/products/productsList/components/Pagination";
import { ProductList } from "@/features/products/productsList/components/ProductsList";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";
import { parseSearchParams } from "@/lib/utils";
import { type PageProps } from "@/types";

export const metadata: Metadata = {
	title: "Search Results",
};

interface Props extends PageProps {
	params: {
		pageNumber: string;
	};
}

export default async function SearchPage({ params, searchParams }: Props) {
	if (!searchParams.query) {
		return notFound();
	}

	const page = parseInt(params.pageNumber, 10) || 1;
	const parsedParams = parseSearchParams(searchParams, page);

	const products = await getProductsBySearch(searchParams.query as string, parsedParams);
	const productsCount = await getProductsCountBySearch(searchParams.query as string, parsedParams);

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<div className="border-b border-zinc-300 pb-10 pt-24">
				<SectionHeader
					title={`Search results for "${searchParams.query as string}"`}
					description={`Found ${products.length} products matching your search term. Did not find what you were looking for? Try different keywords.`}
					id="products-heading"
					className="mb-0"
					headerClassName="text-4xl"
					Tag="h1"
				/>
			</div>
			<div className="pb-24 pt-10">
				<ProductList products={products} />
				<Pagination numberOfPages={numberOfPages} baseUrl="/search" searchParams={searchParams} />
			</div>
		</>
	);
}
