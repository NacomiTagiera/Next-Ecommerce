import NextImage from "next/image";

interface Props {
	src: string;
	alt: string;
}

export const ImageCard = async ({ src, alt }: Props) => (
	<div className="relative">
		<NextImage
			src={src}
			alt={alt}
			width={176}
			height={264}
			priority
			className="aspect-[2/3] w-full rounded-xl bg-zinc-900/5 object-cover shadow-lg"
		/>
		<div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-zinc-900/10" />
	</div>
);
