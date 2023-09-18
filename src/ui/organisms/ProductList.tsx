import { ProductListItem } from "../molecules/ProductListItem";
import { type Product } from "@/types";

type Props = {
	products: Product[];
};

export const ProductList = ({ products }: Props) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
