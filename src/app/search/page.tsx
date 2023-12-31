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
			<h1>Results for: &quot;{searchParams.query}&quot;</h1>
			<ProductList products={products} />
		</>
	);
}
