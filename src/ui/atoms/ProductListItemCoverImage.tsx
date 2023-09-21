import NextImage from "next/image";
import { type ProductsListItemFragment } from "@/gql/graphql";

type Props = {
	product: ProductsListItemFragment;
};

export const ProductListItemCoverImage = ({ product: { name, images } }: Props) => {
	return (
		<div className="aspect-square">
			{images[0] && (
				<NextImage
					src={images[0].url}
					alt={name}
					width={320}
					height={320}
					className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
				/>
			)}
		</div>
	);
};
