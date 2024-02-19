import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getCategoryBySlug } from "@/app/api/categories";
import { getProductsCountInCategory } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";

type Props = {
	params: { category: string; pageNumber: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const category = await getCategoryBySlug(params.category, 1);

	return {
		title: category?.name,
		description: category?.description,
	};
};

export default async function CategoryPage({ params }: Props) {
	const category = await getCategoryBySlug(params.category, +params.pageNumber);
	const productsCount = await getProductsCountInCategory(params.category);

	if (!category?.products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<h1>{category.name}</h1>
			<p>{category.description}</p>
			<ProductList
				products={category.products}
				href={`/categories/${params.category}`}
				numberOfPages={numberOfPages}
			/>
		</>
	);
}
