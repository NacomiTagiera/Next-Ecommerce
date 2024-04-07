"use client";

import { formatPrice } from "@/lib/utils";

import { ActionButton } from "../UI/ActionButton";
import { Button } from "../UI/Button";

export const CartModalCheckoutSection = ({ totalPrice = 0 }: { totalPrice?: number }) => {
	return (
		<div className="mt-auto border-t border-zinc-200 py-6">
			<div className="flex justify-between text-base font-medium">
				<p>Subtotal</p>
				<p>{formatPrice(totalPrice / 100)}</p>
			</div>
			<p className="mt-0.5 text-sm text-zinc-500">Shipping and taxes calculated at checkout.</p>
			<Button
				variant="text"
				size="fullWidth"
				className="my-6 transition-colors hover:bg-skyfall-200"
				onClick={() => window.location.reload()}
			>
				View Shopping Cart
			</Button>
			<form action="/">
				<ActionButton>Checkout</ActionButton>
			</form>
		</div>
	);
};
