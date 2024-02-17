import { cn } from "@/lib/utils";

import { ImageCard } from "./ImageCard";

type Props = {
	images: {
		src: string;
		alt: string;
	}[];
	className?: string;
};

export const ImageColumn = ({ images, className }: Props) => (
	<div className={cn("w-44 flex-none space-y-8", className)}>
		{images.map((image, index) => (
			<ImageCard key={index} {...image} />
		))}
	</div>
);
