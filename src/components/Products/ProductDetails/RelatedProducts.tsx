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
		<aside data-testid="related-products" className="py-8">
			<h2 className="mb-4 text-2xl font-bold">Related Products</h2>
			<ProductList products={products} />
		</aside>
	);
};
