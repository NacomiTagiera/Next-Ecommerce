import { BlurredImage } from "@/components/UI/BlurredImage";
import { type ProductDetailsFragment } from "@/graphql/generated/graphql";

interface Props extends Pick<ProductDetailsFragment, "name" | "images"> {}

export const ProductImage = ({ name, images }: Props) => (
	<figure className="aspect-h-1 aspect-w-1 w-full bg-twilight-200/65 lg:sticky lg:top-28">
		{images[0]?.url && (
			<BlurredImage
				src={images[0].url}
				alt={name}
				width={624}
				height={624}
				priority
				className="size-full object-cover object-center sm:rounded-lg"
			/>
		)}
	</figure>
);
