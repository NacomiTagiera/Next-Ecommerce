type Props = {
	name: string;
	price: number;
	category: string;
};

import { formatPrice } from "@/utils";

export const ProductListItemDescription = ({ name, price, category }: Props) => {
	return (
		<div className="grid grid-cols-5">
			<div className="col-span-4">
				<h3 className="font-semibold">{name}</h3>
				<p>{category}</p>
			</div>
			<div className="col-span-1 justify-self-end">{formatPrice(price / 100)}</div>
		</div>
	);
};
