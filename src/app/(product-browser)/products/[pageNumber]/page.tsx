import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductsCount, getProductsList } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";
import { Pagination } from "@/components/ProductList/Pagination";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";

export const generateStaticParams = async () => {
	const productsCount = await getProductsCount();
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return Array.from({ length: numberOfPages }, (_, index) => ({
		pageNumber: `${index + 1}`,
	}));
};

export const metadata: Metadata = {
	title: "All Products",
};

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const products = await getProductsList(+params.pageNumber);
	const productsCount = await getProductsCount();

	if (!products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<hgroup className="border-b border-zinc-300 pb-10 pt-24">
				<h1 id="products-heading" className="text-4xl font-bold tracking-tight text-zinc-900">
					All Products
				</h1>
				<p className="mt-4 text-base text-zinc-600">
					Explore our wide range of high-quality products. From sports accessories to apparel, we
					have everything you need!
				</p>
			</hgroup>
			<div className="pb-24 pt-10">
				<ProductList products={products} />
				<Pagination numberOfPages={numberOfPages} baseUrl="/products" searchParams={searchParams} />
			</div>
		</>
	);
}
