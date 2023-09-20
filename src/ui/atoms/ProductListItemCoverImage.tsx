import { CustomImage } from "./CustomImage";
import { type ProductsListItemFragment } from "@/gql/graphql";

type Props = {
	product: ProductsListItemFragment;
};

export const ProductListItemCoverImage = ({ product: { name, images } }: Props) => {
	return (
		<div className="aspect-square rounded-md bg-slate-50 p-4 transition-colors hover:bg-slate-100">
			{images[0] && <CustomImage src={images[0].url} alt={name} width={320} height={320} />}
		</div>
	);
};
