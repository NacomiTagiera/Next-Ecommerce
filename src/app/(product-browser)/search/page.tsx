import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductsBySearch } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

export const metadata: Metadata = {
	title: "Search Results",
};

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	if (!searchParams.query) {
		return notFound();
	}

	const products = await getProductsBySearch(searchParams.query as string);

	if (!products) {
		return notFound();
	}

	return (
		<>
			<hgroup className="border-b border-zinc-300 pb-10 pt-24">
				<h1 id="products-heading" className="text-4xl font-bold tracking-tight text-zinc-900">
					Search results for &quot;{searchParams.query}&quot;
				</h1>
				<p className="mt-4 text-base text-zinc-600">
					Found {products.length} products matching your search term. Didn&apos;t find what you were
					looking for? Try different keywords.
				</p>
			</hgroup>
			<div className="pb-24 pt-10">
				<ProductList products={products} />
			</div>
		</>
	);
}
