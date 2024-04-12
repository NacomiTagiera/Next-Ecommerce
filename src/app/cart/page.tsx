import { CartList } from "@/components/Cart/CartList";
import { CartSummary } from "@/components/Cart/CartSummary";
import { CartWrapper } from "@/components/Cart/CartWrapper";
import { EmptyCart } from "@/components/Cart/EmptyCart";
import { formatPrice } from "@/lib/utils";

import { getCartFromCookies } from "../api/cart";

export default async function Cart() {
	const cart = await getCartFromCookies();

	const totalPrice =
		cart?.orderItems.reduce((acc, item) => acc + item.total * item.quantity, 0) || 0;

	return (
		<CartWrapper>
			{cart?.orderItems && cart?.orderItems.length > 0 ? (
				<>
					<CartList items={cart.orderItems} view="fullView" />
					<CartSummary price={formatPrice(totalPrice / 100)} />
				</>
			) : (
				<EmptyCart />
			)}
		</CartWrapper>
	);
}
