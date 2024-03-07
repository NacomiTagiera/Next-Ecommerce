import type { ProductListItemFragment } from "@/graphql/generated/graphql";
import { cn } from "@/lib/utils";

import { BlurredImage } from "../UI/BlurredImage";
import { ImageLink } from "../UI/ImageLink";

import { ProductListItemDescription } from "./ProductListItemDescritpion";

type Props = {
	products: ProductListItemFragment[];
	className?: string;
};

export const ProductList = ({ products, className }: Props) => {
	return (
		<ul className={cn("mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4", className)}>
			{products.map((product) => (
				<li key={product.slug} className="rounded-xl bg-white p-2">
					<ImageLink
						src={product.images[0]?.url}
						alt={product.name}
						width={256}
						height={256}
						href={`/product/${product.slug}`}
						Component={BlurredImage}
					>
						<ProductListItemDescription product={product} />
					</ImageLink>
				</li>
			))}
		</ul>
	);
};
