"use client";

import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="mt-8 flex items-center justify-center rounded-md border border-transparent bg-skyfall-600 px-8 py-3 text-base font-medium text-white hover:bg-skyfall-700 focus:outline-none focus:ring-2 focus:ring-skyfall-500 focus:ring-offset-2"
		>
			Add to cart
		</button>
	);
};
