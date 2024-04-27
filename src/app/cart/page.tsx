import { handlePayment } from "@/actions/cart";
import { CartList } from "@/components/Cart/CartList";
import { CartSummary } from "@/components/Cart/CartSummary";
import { CartWrapper } from "@/components/Cart/CartWrapper";
import { EmptyCart } from "@/components/Cart/EmptyCart";
import { ActionButton } from "@/components/UI/ActionButton";
import { formatPrice } from "@/lib/utils";

import { getCartFromCookies } from "../api/cart";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	const totalPrice =
		cart?.orderItems.reduce((acc, item) => acc + item.total * item.quantity, 0) || 0;

	return (
		<CartWrapper>
			{cart && cart.orderItems.length > 0 ? (
				<>
					<CartList items={cart.orderItems} view="fullView" />
					<CartSummary price={formatPrice(totalPrice / 100)}>
						<form action={handlePayment}>
							<ActionButton className="mt-6">Checkout</ActionButton>
						</form>
					</CartSummary>
				</>
			) : (
				<EmptyCart />
			)}
		</CartWrapper>
	);
}
