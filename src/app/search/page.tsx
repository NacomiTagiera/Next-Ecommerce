import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductsBySearch } from "@/api/products";
import { ProductList } from "@/components/Products/ProductList";

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
			<h2>Results for: &quot;{searchParams.query}&quot;</h2>
			<ProductList products={products} />
		</>
	);
}
