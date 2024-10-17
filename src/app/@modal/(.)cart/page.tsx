import { getCartFromCookies } from "@/features/cart/api/fetchQueries";
import { CartList } from "@/features/cart/components/CartList";
import { CartModalCheckoutSection } from "@/features/cart/components/CartModalCheckoutSection";
import { CartModalContainer } from "@/features/cart/components/CartModalContainer";
import { CartModalHeader } from "@/features/cart/components/CartModalHeader";
import { EmptyCart } from "@/features/cart/components/EmptyCart";
import { calculateItemsTotal, formatPrice } from "@/lib/utils";

export default async function CartModal() {
	const cart = await getCartFromCookies();

	if (!cart || !cart.orderItems || cart.orderItems.length === 0) {
		return (
			<CartModalContainer>
				<CartModalHeader />
				<EmptyCart />
			</CartModalContainer>
		);
	}

	const totalPrice = calculateItemsTotal(cart.orderItems);

	return (
		<CartModalContainer>
			<CartModalHeader />
			<div className="mt-8 flow-root">
				<CartList items={cart.orderItems} view="modal" />
			</div>
			<CartModalCheckoutSection totalPrice={formatPrice(totalPrice / 100)} />
		</CartModalContainer>
	);
}
