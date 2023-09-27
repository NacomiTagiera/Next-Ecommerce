import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getCollectionBySlug } from "@/api/collections";
import { ProductList } from "@/components/Products/ProductList";
import { PRODUCTS_PAGE_SIZE } from "@/lib/constants";
import { getProductsCountInCollection } from "@/api/products";

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

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PAGE_SIZE);

	return (
		<>
			<h2>{collection.name}</h2>
			<p>{collection.description}</p>
			<ProductList
				products={collection.products}
				href={`/collections/${params.collection}`}
				numberOfPages={numberOfPages}
			/>
		</>
	);

	return <div>page</div>;
}
