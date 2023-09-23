import Link from "next/link";

import { ProductListItemCoverImage } from "./ProductListItemCoverImage";
import { ProductListItemDescription } from "./ProductListItemDescritpion";
import { type ProductListItemFragment } from "@/gql/graphql";

type Props = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: Props) => {
	return (
		<li className="animate-fadeIn rounded-lg border border-neutral-200 bg-white transition-opacity hover:border-pumpkin">
			<Link href={`/product/${product.slug}`}>
				<ProductListItemCoverImage product={product} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
