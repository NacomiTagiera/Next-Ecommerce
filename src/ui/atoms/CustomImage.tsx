import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

export const CustomImage = ({ src, alt, height, width, className, ...rest }: ImageProps) => {
	return (
		<Image
			className={cn("object-cover object-center", className)}
			src={src}
			alt={alt}
			width={width}
			height={height}
			{...rest}
		/>
	);
};
