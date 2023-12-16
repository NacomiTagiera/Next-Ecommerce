import Link from "next/link";

import { type ProductListItemFragment } from "@/graphql/generated/graphql";
import { cn } from "@/lib/utils";

import { ProductListItemCoverImage } from "./ProductListItemCoverImage";
import { ProductListItemDescription } from "./ProductListItemDescritpion";

type Props = {
	product: ProductListItemFragment;
	className?: string;
};

export const ProductListItem = ({ product, className }: Props) => {
	return (
		<li
			className={cn(
				"hover:border-pumpkin animate-fade-in rounded-lg border border-neutral-200 bg-white transition-opacity",
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
