import Link from "next/link";

import { ProductListItemCoverImage } from "./ProductListItemCoverImage";
import { ProductListItemDescription } from "./ProductListItemDescritpion";
import { type ProductListItemFragment } from "@/graphql/generated/graphql";
import { cn } from "@/lib/utils";

type Props = {
	product: ProductListItemFragment;
	className?: string;
};

export const ProductListItem = ({ product, className }: Props) => {
	return (
		<li
			className={cn(
				"animate-fadeIn rounded-lg border border-neutral-200 bg-white transition-opacity hover:border-pumpkin",
				className,
			)}
		>
			<Link href={`/product/${product.slug}`}>
				<ProductListItemCoverImage product={product} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
