import { ProductListItem } from "./ProductListItem";
import type { ProductListItemFragment } from "@/gql/graphql";

type Props = {
	products: ProductListItemFragment[];
};

export const ProductList = ({ products }: Props) => {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ul
				className="mb-15 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem key={product.slug} product={product} />
				))}
			</ul>
		</section>
	);
};
