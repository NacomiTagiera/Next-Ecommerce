import { ActionButton } from "@/components/UI/ActionButton";
import { handlePayment } from "@/features/cart/api/actions";
import { getCartFromCookies } from "@/features/cart/api/fetchQueries";
import { CartList } from "@/features/cart/components/CartList";
import { CartSummary } from "@/features/cart/components/CartSummary";
import { CartWrapper } from "@/features/cart/components/CartWrapper";
import { EmptyCart } from "@/features/cart/components/EmptyCart";
import { calculateItemsTotal, formatPrice } from "@/lib/utils";

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart || !cart.orderItems || cart.orderItems.length === 0) {
		return (
			<CartWrapper>
				<EmptyCart />
			</CartWrapper>
		);
	}

	const totalPrice = calculateItemsTotal(cart.orderItems);

	return (
		<CartWrapper>
			<CartList items={cart.orderItems} view="fullView" />
			<CartSummary price={formatPrice(totalPrice / 100)}>
				<form action={handlePayment}>
					<ActionButton className="mt-6">Checkout</ActionButton>
				</form>
			</CartSummary>
		</CartWrapper>
	);
}
