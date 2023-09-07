import Link from "next/link";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItem as ProductListItemType } from "@/types";

type Props = {
	product: ProductListItemType;
};

export const ProductListItem = ({ product }: Props) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<ProductListItemCoverImage product={product} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
