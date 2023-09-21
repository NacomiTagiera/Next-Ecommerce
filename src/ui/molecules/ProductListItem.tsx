import Link from "next/link";
import { ProductListItemCoverImage } from "../atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductsListItemFragment } from "@/gql/graphql";

type Props = {
	product: ProductsListItemFragment;
};

export const ProductListItem = ({ product }: Props) => {
	return (
		<li className="aspect-square animate-fadeIn rounded-lg border border-neutral-200 bg-white transition-opacity hover:border-blue-600">
			<Link href={`/product/${product.slug}`}>
				<ProductListItemCoverImage product={product} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
