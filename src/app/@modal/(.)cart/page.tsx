import { getCartFromCookies } from "@/app/api/cart";
import { CartList } from "@/components/Cart/CartList";
import { CartModalCheckoutSection } from "@/components/Cart/CartModalCheckoutSection";
import { CartModalContainer } from "@/components/Cart/CartModalContainer";
import { CartModalHeader } from "@/components/Cart/CartModalHeader";
import { EmptyCart } from "@/components/Cart/EmptyCart";
import { formatPrice } from "@/lib/utils";

export default async function CartModal() {
	const cart = await getCartFromCookies();

	const totalPrice =
		cart?.orderItems.reduce((acc, item) => acc + item.total * item.quantity, 0) || 0;

	return (
		<CartModalContainer>
			<CartModalHeader />
			{cart?.orderItems && cart?.orderItems.length > 0 ? (
				<>
					<div className="mt-8 flow-root">
						<CartList items={cart.orderItems} view="modal" />
					</div>
					<CartModalCheckoutSection totalPrice={formatPrice(totalPrice / 100)} />
				</>
			) : (
				<EmptyCart />
			)}
		</CartModalContainer>
	);
}
