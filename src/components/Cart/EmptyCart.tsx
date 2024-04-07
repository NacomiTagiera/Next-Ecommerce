import { FiShoppingBag } from "react-icons/fi";

export const EmptyCart = () => (
	<div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
		<FiShoppingBag className="h-16" />
		<p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
	</div>
);
