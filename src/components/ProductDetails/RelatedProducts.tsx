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
		<section
			aria-labelledby="related-products-heading"
			className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8"
		>
			<SectionHeader
				id="related-products-heading"
				title="You may also like"
				headerClassName="text-xl"
			/>
			<ProductList products={products} />
		</section>
	);
};
