import { type ProductListItemFragment } from "@/graphql/generated/graphql";
import { formatPrice } from "@/lib/utils";

type Props = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({ product: { name, price, categories } }: Props) => {
	return (
		<div className="flex items-center justify-between pt-6">
			<div>
				<h3 className="text-base">{name}</h3>
				<p className="text-gray-600">{categories[0]?.name}</p>
			</div>
			<span className="text-pumpkin text-xl font-bold">{formatPrice(price / 100)}</span>
		</div>
	);
};
