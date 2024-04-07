import { FiShoppingBag } from "react-icons/fi";

import Link from "next/link";

import { getCartFromCookies } from "@/app/api/cart";

export const ShoppingBagIcon = async () => {
	const cart = await getCartFromCookies();
	const orderItemsCount = cart?.orderItems.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<div className="ml-3 flow-root">
			<Link
				href="/cart"
				className="group flex items-center focus:outline-none focus:ring-2 focus:ring-skyfall-300"
			>
				<FiShoppingBag
					className="h-5 w-5 text-zinc-700 transition-colors group-hover:text-skyfall-500 md:h-6 md:w-6"
					aria-hidden
				/>
				<span className="ml-1 font-semibold group-hover:text-skyfall-500">{orderItemsCount}</span>
				<span className="sr-only">items in cart</span>
			</Link>
		</div>
	);
};
