import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getCollectionBySlug, getCollectionsList } from "@/app/api/collections";
import { getProductsCountInCollection } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";
import { PRODUCTS_PER_PAGE } from "@/lib/constants";

type Props = {
	params: { collection: string; pageNumber: string };
};

export async function generateStaticParams({ params }: Props) {
	const collections = await getCollectionsList();
	const productsCount = await getProductsCountInCollection(params.collection);
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PER_PAGE);

	const result = [];

	for (let index = 0; index < numberOfPages; index++) {
		for (const collection of collections) {
			result.push({
				collection: collection.slug,
				pageNumber: `${index + 1}`,
			});
		}
	}

	return result;
}

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
