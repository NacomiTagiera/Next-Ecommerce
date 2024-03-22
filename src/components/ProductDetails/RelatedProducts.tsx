import { getRelatedProducts } from "@/app/api/products";

import { ProductList } from "../ProductList";
import { SectionHeader } from "../Storefront/SectionHeader";

export const RelatedProducts = async ({
	productSlug,
	categoriesSlugs,
}: {
	productSlug: string;
	categoriesSlugs: string[];
}) => {
	const products = await getRelatedProducts(productSlug, categoriesSlugs);

	return (
		<aside className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<SectionHeader
				title="You may also like"
				className="mb-6"
				headerClassName="text-2xl"
				Tag="h3"
			/>
			<ProductList products={products} />
		</aside>
	);
};
