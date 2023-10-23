"use client";

import { useFormStatus } from "react-dom";

export function AddToCartButton() {
	const formStatus = useFormStatus();
	return (
		<button
			data-testid="add-to-cart-button"
			type="submit"
			disabled={formStatus.pending}
			className="inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 disabled:cursor-wait disabled:bg-blue-400"
		>
			Add to cart
		</button>
	);
}
