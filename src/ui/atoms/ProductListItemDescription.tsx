import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils";

type Props = {
	product: ProductsListItemFragment;
};

export const ProductListItemDescription = ({ product: { name, price, categories } }: Props) => {
	return (
		<div className="grid grid-cols-5">
			<div className="col-span-4">
				<h3 className="font-semibold">{name}</h3>
				{categories[0] && <p className="text-sm">{categories[0].name}</p>}
			</div>
			<div className="col-span-1 justify-self-end">{formatPrice(price / 100)}</div>
		</div>
	);
};
