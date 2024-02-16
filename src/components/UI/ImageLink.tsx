import type { Route } from "next";
import NextImage from "next/image";
import Link from "next/link";

import { type BlurredImage } from "./BlurredImage";
type Props = {
	src: string | undefined;
	alt: string;
	width: number;
	height: number;
	href: Route;
	children?: React.ReactNode;
	Component?: typeof NextImage | typeof BlurredImage;
};

export const ImageLink = ({
	src,
	alt,
	width,
	height,
	href,
	children,
	Component = NextImage,
}: Props) => (
	<Link href={href} className="group block">
		<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
			{src ? (
				<Component
					src={src}
					alt={alt}
					width={width}
					height={height}
					className="object-cover object-center"
				/>
			) : null}
		</div>
		{children}
	</Link>
);
