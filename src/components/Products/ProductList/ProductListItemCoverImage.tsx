import NextImage from "next/image";
import { type ProductListItemFragment } from "@/graphql/generated/graphql";

type Props = {
	product: ProductListItemFragment;
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
					className="relative h-full w-full object-contain"
				/>
			)}
		</div>
	);
};
