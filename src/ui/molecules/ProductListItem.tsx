import Link from "next/link";
import { ProductListItemCoverImage } from "../atoms/ProductListItemCoverImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type Product } from "@/types";

type Props = {
	product: Product;
};

export const ProductListItem = ({ product }: Props) => {
	const { id, image, name, price, category } = product;
	return (
		<li>
			<Link href={`/product/${id}`}>
				<ProductListItemCoverImage src={image} alt={name} />
				<ProductListItemDescription name={name} price={price} category={category} />
			</Link>
		</li>
	);
};
