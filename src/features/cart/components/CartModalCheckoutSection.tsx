import { FiArrowRight } from "react-icons/fi";

interface Props {
	totalPrice: string;
}

export const CartModalCheckoutSection = ({ totalPrice }: Props) => {
	return (
		<div className="mt-auto border-t border-zinc-200 py-6">
			<div className="flex justify-between text-base font-medium">
				<p>Subtotal</p>
				<p>{totalPrice}</p>
			</div>
			<p className="mt-0.5 text-sm text-zinc-500">Shipping and taxes calculated at checkout.</p>
			<a
				href="/cart"
				className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-skyfall-500 px-5 py-3 text-center text-base font-medium text-white shadow-sm transition-colors hover:bg-skyfall-600 focus:outline-none focus:ring-4 focus:ring-skyfall-300 aria-disabled:bg-zinc-500"
			>
				Continue
				{<FiArrowRight className="me-2 size-5" aria-hidden />}
			</a>
		</div>
	);
};
