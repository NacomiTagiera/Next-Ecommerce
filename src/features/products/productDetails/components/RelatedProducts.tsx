import { SectionHeader } from "@/components/UI/SectionHeader";

import { ProductList } from "../../productsList/components/ProductsList";
import { getRelatedProducts } from "../api/fetchQueries";

interface Props {
	productSlug: string;
	categoriesSlugs: string[];
}

export const RelatedProducts = async ({ productSlug, categoriesSlugs }: Props) => {
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
