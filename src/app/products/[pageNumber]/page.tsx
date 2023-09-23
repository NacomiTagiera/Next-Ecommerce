import { notFound } from "next/navigation";
import { getAllProducts } from "@/api/products";
import { ProductList } from "@/components/Products/ProductList";
import { PRODUCTS_PAGE_SIZE } from "@/lib/constants";
import { ProductsListPagination } from "@/components/Products/ProductList/ProductsListPagination";

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const { products, count } = await getAllProducts(+params.pageNumber);

	if (!products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(count / PRODUCTS_PAGE_SIZE);

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
			<ProductsListPagination numberOfPages={numberOfPages} />
		</section>
	);
}
