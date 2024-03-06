import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getCategoryBySlug } from "@/app/api/categories";
import { getProductsCountInCategory } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";
import { Pagination } from "@/components/ProductList/Pagination";
import { SectionHeader } from "@/components/Storefront/SectionHeader";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";

type Props = {
	params: { category: string; pageNumber: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const category = await getCategoryBySlug(params.category, 1);

	return {
		title: category?.name,
		description: category?.description,
	};
};

export default async function CategoryPage({ params, searchParams }: Props) {
	const category = await getCategoryBySlug(params.category, +params.pageNumber);
	const productsCount = await getProductsCountInCategory(params.category);

	if (!category?.products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<div className="border-b border-zinc-300 pb-10 pt-24">
				<SectionHeader
					title={category.name}
					description={`Check out our ${category.name}. Get what you need to stay active and stylish!`}
					id="products-heading"
					className="mb-0"
					headerClassName="text-4xl capitalize"
					Tag="h1"
				/>
			</div>
			<div className="pb-24 pt-10">
				<ProductList products={category.products} />
				<Pagination
					numberOfPages={numberOfPages}
					baseUrl={`/categories/${category.slug}`}
					searchParams={searchParams}
				/>
			</div>
		</>
	);
}
