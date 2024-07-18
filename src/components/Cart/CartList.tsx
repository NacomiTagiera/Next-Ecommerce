import { type CartFragment } from "@/graphql/generated/graphql";
import { cn } from "@/lib/utils";

import { CartListItem } from "./CartListItem";

type Props = {
	items: CartFragment["orderItems"];
	view?: "fullView" | "modal";
};

export const CartList = ({ items, view }: Props) => {
	return (
		<section className="lg:col-span-7">
			<h2 className="sr-only">Items in your shopping cart</h2>
			<ul
				className={cn("divide-y divide-zinc-200", {
					"border-t border-zinc-200": view === "modal",
				})}
			>
				{items.map((item) => (
					<CartListItem
						key={item.id}
						orderItem={item}
						view={view || "fullView"}
						itemsLength={items.length}
					/>
				))}
			</ul>
		</section>
	);
};
