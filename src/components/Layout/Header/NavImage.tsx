import NextImage from "next/image";
import Link from "next/link";

type Props = {
	name: string;
	slug: string;
	grouping: string;
	src?: string;
	width?: number;
	height?: number;
};

export const NavImage = ({ name, slug, grouping, src, width, height }: Props) => (
	<div className="group relative">
		<div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
			{src ? (
				<NextImage
					src={src}
					alt={name}
					width={width}
					height={height}
					className="object-cover object-center"
				/>
			) : null}
		</div>
		<Link href={`/${grouping}/${slug}`} className="mt-6 block text-sm font-medium text-zinc-800">
			<span className="absolute inset-0 z-10" aria-hidden />
			{name}
		</Link>
		<p aria-hidden className="mt-1 text-sm text-zinc-500">
			Shop now
		</p>
	</div>
);
