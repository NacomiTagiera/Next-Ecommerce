import { CustomImage } from "./CustomImage";

type Props = {
	src: string;
	alt: string;
	size?: number;
};

export const ProductListItemCoverImage = ({ src, alt, size = 320 }: Props) => {
	return (
		<div className="aspect-square rounded-md bg-slate-50 p-4 transition-colors hover:bg-slate-100">
			<CustomImage
				alt={alt}
				src={src}
				width={size}
				height={size}
				className="aspect-square transition-transform hover:scale-105"
			/>
		</div>
	);
};
