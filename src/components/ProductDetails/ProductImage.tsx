import { type ProductProps } from "@/types";

import { BlurredImage } from "../UI/BlurredImage";

export const ProductImage = ({ product }: ProductProps) => (
	<div className="aspect-h-1 aspect-w-1 w-full bg-twilight-200/65">
		{product.images[0]?.url && (
			<BlurredImage
				src={product.images[0].url}
				alt={product.name}
				width={624}
				height={624}
				priority
				className="size-full object-cover object-center sm:rounded-lg"
			/>
		)}
	</div>
);
