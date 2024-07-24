import NextImage from "next/image";

import { type CartFragment } from "@/graphql/generated/graphql";
import { cn, formatPrice } from "@/lib/utils";

import { ChangeItemQuantity } from "./ChangeItemQuantity";
import { ItemRemoveButton } from "./ItemRemoveButton";

interface Props {
	orderItem: CartFragment["orderItems"][0];
	itemsLength?: number;
	view?: "fullView" | "modal";
}

export const CartListItem = ({
	orderItem: { id, product, quantity },
	itemsLength = 0,
	view = "fullView",
}: Props) => {
	return (
		<li
			className={cn("flex py-6", {
				"bg-zinc-50 px-4 first:rounded-t-lg last:rounded-b-lg": view === "fullView",
			})}
		>
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-zinc-200">
				{product?.images[0] && (
					<NextImage
						src={product.images[0]?.url}
						alt={product.name}
						className="size-full object-cover object-center"
						priority
						width={96}
						height={96}
					/>
				)}
			</div>
			<div className="ml-4 flex flex-1 flex-col justify-between">
				<div className="flex justify-between text-base font-medium">
					<h3>{product?.name}</h3>
					<p className="ml-4">{formatPrice((Number(product?.price) * quantity) / 100)}</p>
				</div>
				{view === "fullView" ? (
					<div className="flex flex-1 items-end justify-between">
						<ChangeItemQuantity itemId={id} quantity={quantity} />
						<ItemRemoveButton itemId={id} itemsLength={itemsLength} />
					</div>
				) : (
					<p className="text-sm text-zinc-500">Quantity: {quantity}</p>
				)}
			</div>
		</li>
	);
};
