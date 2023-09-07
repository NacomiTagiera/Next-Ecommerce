import { ProductListItem } from "../molecules/ProductListItem";
import type { ProductListItem as ProductListItemType } from "@/types";

type Props = {
	products: ProductListItemType[];
};

export const ProductList = ({ products }: Props) => {
	return (
		<ul
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
