import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getProductsCount, getProductsList } from "@/api/products";
import { ProductList } from "@/components/Products/ProductList";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";

// export const dynamicParams = false;

// export const generateStaticParams = async () => {
// 	const productsCount = await getProductsCount();
// 	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

// 	return Array.from({ length: numberOfPages }, (_, index) => ({
// 		pageNumber: `${index + 1}`,
// 	}));
// };

export const metadata: Metadata = {
	title: "All Products",
};

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const products = await getProductsList(+params.pageNumber);
	const productsCount = await getProductsCount();

	if (!products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<h1>All Products</h1>
			<p>
				Showing {products.length} of {productsCount} products
			</p>
			<p>
				Page {params.pageNumber} of {numberOfPages}
			</p>
			<hr />
			<ProductList products={products} href="/products" numberOfPages={numberOfPages} />
		</>
	);
}
