import NextImage from "next/image";

import { type OrderFragment } from "@/graphql/generated/graphql";
import { formatPrice } from "@/lib/utils";

import { ItemRemoveButton } from "./ItemRemoveButton";

type Props = {
	product: OrderFragment["orderItems"][0]["product"];
	quantity: OrderFragment["orderItems"][0]["quantity"];
	price: OrderFragment["orderItems"][0]["total"];
	view?: "fullView" | "modal";
};

export const CartItem = ({ product, quantity, price, view = "fullView" }: Props) => {
	if (!product) {
		return null;
	}

	return (
		<li className="flex py-6">
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-zinc-200">
				{product.images[0] && (
					<NextImage
						src={product.images[0]?.url}
						alt={product.name}
						className="size-full object-cover object-center"
						width={96}
						height={96}
					/>
				)}
			</div>
			<div className="ml-4 flex flex-1 flex-col">
				<div>
					<div className="flex justify-between text-base font-medium">
						<h3>{product.name}</h3>
						<p className="ml-4">{formatPrice(price / 100)}</p>
					</div>
				</div>
				<div className="flex flex-1 items-end justify-between text-sm">
					{view === "modal" && <p className="text-zinc-500">Quantity: {quantity}</p>}
					{view === "fullView" && <ItemRemoveButton itemId={product.id} />}
				</div>
			</div>
		</li>
	);
};
