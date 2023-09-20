import Link from "next/link";
import { ProductListItemCoverImage } from "../atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductsListItemFragment } from "@/gql/graphql";

type Props = {
	product: ProductsListItemFragment;
};

export const ProductListItem = ({ product }: Props) => {
	return (
		<li>
			<Link href={`/product/${product.slug}`}>
				<ProductListItemCoverImage product={product} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
