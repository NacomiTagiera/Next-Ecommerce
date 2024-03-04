import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getCollectionBySlug } from "@/app/api/collections";
import { getProductsCountInCollection } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";
import { Pagination } from "@/components/ProductList/Pagination";
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
			<hgroup className="border-b border-zinc-300 pb-10 pt-24">
				<h1
					id="products-heading"
					className="text-4xl font-bold capitalize tracking-tight text-zinc-900"
				>
					{collection.name}
				</h1>
				<p className="mt-4 text-base text-zinc-600">
					Check out the {collection.name} collection. Get what you need to stay active and stylish!
				</p>
			</hgroup>
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
