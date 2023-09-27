import { type Route } from "next";

import { ProductListItem } from "./ProductListItem";
import { ProductListPagination } from "./ProductListPagination";
import type { ProductListItemFragment } from "@/gql/graphql";

type Props<T extends string> = {
	products: ProductListItemFragment[];
	href?: Route<T>;
	numberOfPages?: number;
};

export const ProductList = <T extends string>({
	products,
	href = "/products",
	numberOfPages,
}: Props<T>) => {
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
			{numberOfPages && <ProductListPagination href={href} numberOfPages={numberOfPages} />}
		</section>
	);
};
