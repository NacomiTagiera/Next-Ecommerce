import { getProductsList } from "@/app/api/products";
import { ProductList } from "@/components/ProductList";

import { SectionHeader } from "../SectionHeader";

import { AllProductsLink } from "./AllProductsLink";

export const TrendingProducts = async () => {
	const products = await getProductsList(1);

	return (
		<section aria-labelledby="trending-heading">
			<div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<div className="md:flex md:items-center md:justify-between">
					<SectionHeader
						id="trending-heading"
						title="Our Favorites"
						headerClassName="text-center md:text-left"
					/>
					<AllProductsLink className="hidden md:block" />
				</div>
				<ProductList products={products} className="mt-0" />
				<div className="flex justify-end md:hidden">
					<AllProductsLink />
				</div>
			</div>
		</section>
	);
};
