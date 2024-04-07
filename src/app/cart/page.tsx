import { FiShoppingBag } from "react-icons/fi";

import { CartItem } from "@/components/Cart/CartItem";

import { getCartFromCookies } from "../api/cart";

export default async function Cart() {
	const cart = await getCartFromCookies();

	return (
		<div>
			{cart?.orderItems && cart?.orderItems.length > 0 ? (
				<div className="mt-8 flow-root">
					<ul className="-my-6 divide-y divide-zinc-200">
						{cart.orderItems.map((item) => (
							<CartItem
								key={item.id}
								product={item.product}
								quantity={item.quantity}
								price={item.total}
							/>
						))}
					</ul>
				</div>
			) : (
				<div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
					<FiShoppingBag className="h-16" />
					<p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
				</div>
			)}
		</div>
	);
}
