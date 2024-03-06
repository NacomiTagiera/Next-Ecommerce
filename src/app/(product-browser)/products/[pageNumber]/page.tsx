import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductsCount, getProductsList } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";
import { Pagination } from "@/components/ProductList/Pagination";
import { SectionHeader } from "@/components/Storefront/SectionHeader";
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
			<div className="border-b border-zinc-300 pb-10 pt-24">
				<SectionHeader
					title="All Products"
					description="Explore our wide range of high-quality products. From sports accessories to apparel, we
					have everything you need!"
					id="products-heading"
					className="mb-0"
					headerClassName="text-4xl"
					Tag="h1"
				/>
			</div>
			<div className="pb-24 pt-10">
				<ProductList products={products} />
				<Pagination numberOfPages={numberOfPages} baseUrl="/products" searchParams={searchParams} />
			</div>
		</>
	);
}
