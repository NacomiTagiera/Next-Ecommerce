import { ActionButton } from "../UI/ActionButton";

export const CartModalCheckoutSection = ({ totalPrice }: { totalPrice: string }) => {
	return (
		<div className="mt-auto border-t border-zinc-200 py-6">
			<div className="flex justify-between text-base font-medium">
				<p>Subtotal</p>
				<p>{totalPrice}</p>
			</div>
			<p className="mt-0.5 text-sm text-zinc-500">Shipping and taxes calculated at checkout.</p>
			<a
				href="/cart"
				className="my-6 inline-flex w-full items-center justify-center rounded-md bg-transparent px-5 py-3 text-center text-base font-medium text-skyfall-500 shadow-sm transition-colors hover:bg-skyfall-200 hover:text-skyfall-600 focus:outline-none focus:ring-2 focus:ring-skyfall-300"
			>
				View Shopping Cart
			</a>
			<form action="/">
				<ActionButton>Checkout</ActionButton>
			</form>
		</div>
	);
};
