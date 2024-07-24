import { ActionButton } from "@/components/UI/ActionButton";
import { handlePayment } from "@/features/cart/api/actions";
import { getCartFromCookies } from "@/features/cart/api/fetchQueries";
import { CartList } from "@/features/cart/components/CartList";
import { CartSummary } from "@/features/cart/components/CartSummary";
import { CartWrapper } from "@/features/cart/components/CartWrapper";
import { EmptyCart } from "@/features/cart/components/EmptyCart";
import { formatPrice } from "@/lib/utils";

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
