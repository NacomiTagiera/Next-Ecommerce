import { ActionButton } from "../UI/ActionButton";

export const CartSummary = ({ price }: { price: string }) => (
	<aside className="mt-16 rounded-lg bg-zinc-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
		<h3 className="text-lg font-medium">Order summary</h3>
		<dl className="mt-6 space-y-4">
			<div className="flex items-center justify-between">
				<dt className="text-sm text-zinc-600">Subtotal</dt>
				<dd className="text-sm font-medium">{price}</dd>
			</div>
			<div className="flex items-center justify-between border-t border-zinc-200 pt-4">
				<dt className="flex items-center text-sm text-zinc-600">Shipping</dt>
				<dd className="text-sm font-medium">Free</dd>
			</div>
			<div className="flex items-center justify-between border-t border-zinc-200 pt-4">
				<dt className="text-base font-medium">Order total</dt>
				<dd className="text-base font-medium">{price}</dd>
			</div>
		</dl>
		<ActionButton className="mt-6">Checkout</ActionButton>
	</aside>
);
