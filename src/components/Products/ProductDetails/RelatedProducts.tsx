import { ProductList } from "../ProductList";
import { getRelatedProducts } from "@/api/products";

export const RelatedProducts = async ({
	productSlug,
	categoriesSlugs,
}: {
	productSlug: string;
	categoriesSlugs: string[];
}) => {
	const products = await getRelatedProducts(productSlug, categoriesSlugs);

	return (
		<aside data-testid="related-products">
			<div className="py-16">
				<h2 className="py-8 text-xl font-semibold leading-7">Related Products</h2>
				<ProductList products={products} />
			</div>
		</aside>
	);
};
