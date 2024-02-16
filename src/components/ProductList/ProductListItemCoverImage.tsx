import { type ProductListItemFragment } from "@/graphql/generated/graphql";

import { BlurredImage } from "../UI/BlurredImage";

type Props = {
	product: ProductListItemFragment;
};

export const ProductListItemCoverImage = async ({ product: { name, images } }: Props) => {
	return (
		<div className="aspect-square">
			{images[0] && (
				<BlurredImage
					src={images[0].url}
					alt={name}
					width={320}
					height={320}
					className="h-full w-full object-contain"
				/>
			)}
		</div>
	);
};
