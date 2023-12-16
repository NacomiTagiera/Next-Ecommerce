import { type Route } from "next";

import type { ProductListItemFragment } from "@/graphql/generated/graphql";

import { ProductListItem } from "./ProductListItem";
import { ProductListPagination } from "./ProductListPagination";

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
			<ul className="mb-15 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{products.map((product) => (
					<ProductListItem key={product.slug} product={product} />
				))}
			</ul>
			{numberOfPages && <ProductListPagination href={href} numberOfPages={numberOfPages} />}
		</section>
	);
};
