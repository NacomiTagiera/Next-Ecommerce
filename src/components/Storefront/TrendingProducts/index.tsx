import { SectionHeader } from "@/components/UI/SectionHeader";
import { getProductsList } from "@/features/products/productsList/api/fetchQueries";
import { ProductList } from "@/features/products/productsList/components/ProductsList";
import { parseSearchParams } from "@/lib/utils";

import { AllProductsLink } from "./AllProductsLink";

export const TrendingProducts = async () => {
	const products = await getProductsList(parseSearchParams({}, 1));

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
