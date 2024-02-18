import { BlurredImage } from "@/components/UI/BlurredImage";

type Props = {
	src: string;
	alt: string;
};

export const ImageCard = async ({ src, alt }: Props) => (
	<div className="relative">
		<BlurredImage
			src={src}
			alt={alt}
			width={176}
			height={264}
			priority
			className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
		/>
		<div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
	</div>
);
