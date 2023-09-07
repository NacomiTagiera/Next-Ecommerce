import Image from "next/image";
import { type ProductListItem } from "@/types";

type Props = {
	product: ProductListItem;
};

export const ProductListItemCoverImage = ({ product: { coverImage } }: Props) => {
	return (
		<div className="rounded-md border bg-slate-50 duration-300 hover:bg-slate-100">
			<Image
				src={coverImage.src}
				alt={coverImage.alt}
				width={coverImage.width}
				height={coverImage.height}
				className="w-full object-contain object-center p-4 transition-transform duration-300 hover:scale-105"
			/>
		</div>
	);
};
