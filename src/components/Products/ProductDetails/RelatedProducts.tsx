import { ProductListItem } from "../ProductList/ProductListItem";
import { getRelatedProducts } from "@/app/api/products";

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
			<ul className="flex w-full gap-4 overflow-x-auto pt-1">
				{products.map((product) => (
					<ProductListItem
						key={product.slug}
						product={product}
						className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
					/>
				))}
			</ul>
		</aside>
	);
};
