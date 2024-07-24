import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionHeader } from "@/components/UI/SectionHeader";
import { getProductsBySearch } from "@/features/products/productsList/api/fetchQueries";
import { ProductList } from "@/features/products/productsList/components/ProductsList";

export const metadata: Metadata = {
	title: "Search Results",
};

interface Props {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

export default async function SearchPage({ searchParams }: Props) {
	if (!searchParams.query) {
		return notFound();
	}

	const products = await getProductsBySearch(searchParams.query as string);

	if (!products) {
		return notFound();
	}

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
			</div>
		</>
	);
}
