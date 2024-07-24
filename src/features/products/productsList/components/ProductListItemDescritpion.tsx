import { ProductRating } from "@/components/UI/ProductRating";
import { type ProductListItemFragment } from "@/graphql/generated/graphql";
import { formatPrice } from "@/lib/utils";

interface Props {
	product: ProductListItemFragment;
}

export const ProductListItemDescription = ({
	product: { name, price, categories, rating },
}: Props) => {
	return (
		<div className="mt-2 space-y-2 px-1 text-zinc-800">
			<div>
				<h3 className="text-base font-medium">{name}</h3>
				<p className="text-sm capitalize text-zinc-500">{categories[0]?.name}</p>
			</div>
			<div className="flex items-center justify-between">
				<p className="text-lg font-semibold">{formatPrice(price / 100)}</p>
				<ProductRating rating={rating} />
			</div>
		</div>
	);
};
