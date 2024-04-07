import { getCartFromCookies } from "@/app/api/cart";
import { CartItem } from "@/components/Cart/CartItem";
import { CartModalCheckoutSection } from "@/components/Cart/CartModalCheckoutSection";
import { CartModalContainer } from "@/components/Cart/CartModalContainer";
import { CartModalHeader } from "@/components/Cart/CartModalHeader";
import { EmptyCart } from "@/components/Cart/EmptyCart";

export default async function CartModal() {
	const cart = await getCartFromCookies();

	const totalPrice = cart?.orderItems.reduce((acc, item) => acc + item.total, 0);

	return (
		<CartModalContainer>
			<CartModalHeader />
			{cart?.orderItems && cart?.orderItems.length > 0 ? (
				<>
					<div className="mt-8 flow-root">
						<ul className="-my-6 divide-y divide-zinc-200">
							{cart.orderItems.map((item) => (
								<CartItem
									key={item.id}
									product={item.product}
									quantity={item.quantity}
									price={item.total}
									view="modal"
								/>
							))}
						</ul>
					</div>
					<CartModalCheckoutSection totalPrice={totalPrice} />
				</>
			) : (
				<EmptyCart />
			)}
		</CartModalContainer>
	);
}
