import { getProductsList } from "@/app/api/products";
import { ProductListItem } from "@/components/ProductList/ProductListItem";

import { SectionHeader } from "../SectionHeader";

import { AllProductsLink } from "./AllProductsLink";

export const TrendingProducts = async () => {
	const products = await getProductsList(1);

	return (
		<section aria-labelledby="trending-heading" className="bg-white">
			<div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="md:flex md:items-center md:justify-between">
					<SectionHeader
						id="trending-heading"
						title="Our Favorites"
						headerClassName="text-center md:text-left"
					/>
					<AllProductsLink className="hidden md:block" />
				</div>
				<ul className="mb-8 grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4">
					{products.map((product) => (
						<ProductListItem key={product.slug} product={product} />
					))}
				</ul>
				<div className="flex justify-end md:hidden">
					<AllProductsLink />
				</div>
			</div>
		</section>
	);
};
