import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductsCount, getProductsList } from "@/api/products";
import { ProductList } from "@/components/Products/ProductList";
import { PRODUCTS_PAGE_SIZE } from "@/lib/constants";

export const generateStaticParams = async () => {
	const productsCount = await getProductsCount();
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PAGE_SIZE);

	return Array.from({ length: numberOfPages }, (_, index) => ({
		pageNumber: `${index + 1}`,
	}));
};

export const metadata: Metadata = {
	title: "All Products",
};

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const products = await getProductsList(+params.pageNumber);
	const productsCount = await getProductsCount();

	if (!products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PAGE_SIZE);

	return (
		<>
			<ProductList products={products} href="/products" numberOfPages={numberOfPages} />
		</>
	);
}
