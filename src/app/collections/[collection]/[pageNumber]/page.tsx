import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { getCollectionBySlug, getCollectionsList } from "@/api/collections";
import { getProductsCount } from "@/api/products";
import { ProductList } from "@/components/Products/ProductList";
import { ProductListPagination } from "@/components/Products/ProductList/ProductListPagination";
import { PRODUCTS_PAGE_SIZE } from "@/lib/constants";

type Props = {
	params: { collection: string; pageNumber: string };
};

export const generateStaticParams = async ({ params }: Props) => {
	const collections = await getCollectionsList();
	const productsCount = await getProductsCount(undefined, [params.collection]);
	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PAGE_SIZE);

	const result = [];

	for (let index = 0; index < numberOfPages; index++) {
		for (const collection of collections) {
			result.push({
				pageNumber: `${index + 1}`,
				collection: collection.slug,
			});
		}
	}

	return result;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const collection = await getCollectionBySlug(params.collection);

	return {
		title: collection?.name,
		description: collection?.description,
	};
};

export default async function CollectionPage({ params }: Props) {
	const collection = await getCollectionBySlug(params.collection);
	const productsCount = await getProductsCount(undefined, [params.collection]);

	if (!collection?.products.length) {
		return notFound();
	}

	const numberOfPages = Math.ceil(productsCount / PRODUCTS_PAGE_SIZE);

	return (
		<>
			<h2>{collection?.name}</h2>
			<p>{collection?.description}</p>
			<ProductList products={collection?.products} />
			<ProductListPagination
				href={`/collections/${params.collection}`}
				numberOfPages={numberOfPages}
			/>
		</>
	);

	return <div>page</div>;
}
