import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getCollectionBySlug } from "@/app/api/collections";
import { getProductsCountInCollection } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";

type Props = {
	params: { collection: string; pageNumber: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const collection = await getCollectionBySlug(params.collection, 1);

	return {
		title: collection?.name,
		description: collection?.description,
	};
};

export default async function CollectionPage({ params }: Props) {
	const collection = await getCollectionBySlug(params.collection, +params.pageNumber);
	const productsCount = await getProductsCountInCollection(params.collection);

	if (!collection?.products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	return (
		<>
			<h1>{collection.name}</h1>
			<p>{collection.description}</p>
			<ProductList
				products={collection.products}
				href={`/collections/${params.collection}`}
				numberOfPages={numberOfPages}
			/>
		</>
	);
}
