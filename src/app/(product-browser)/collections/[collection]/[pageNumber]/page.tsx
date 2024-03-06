import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getCollectionBySlug } from "@/app/api/collections";
import { getProductsCountInCollection } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";
import { Pagination } from "@/components/ProductList/Pagination";
import { SectionHeader } from "@/components/Storefront/SectionHeader";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";

type Props = {
	params: { collection: string; pageNumber: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const collection = await getCollectionBySlug(params.collection, 1);

	return {
		title: collection?.name,
		description: collection?.description,
	};
};

export default async function CollectionPage({ params, searchParams }: Props) {
	const collection = await getCollectionBySlug(params.collection, +params.pageNumber);
	const productsCount = await getProductsCountInCollection(params.collection);

	if (!collection?.products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<div className="border-b border-zinc-300 pb-10 pt-24">
				<SectionHeader
					title={collection.name}
					description={`Check out the ${collection.name} collection. Get what you need to stay active and stylish!`}
					id="products-heading"
					className="mb-0"
					headerClassName="text-4xl capitalize"
					Tag="h1"
				/>
			</div>
			<div className="pb-24 pt-10">
				<ProductList products={collection.products} />
				<Pagination
					numberOfPages={numberOfPages}
					baseUrl={`/collections/${collection.slug}`}
					searchParams={searchParams}
				/>
			</div>
		</>
	);
}
