"use client";

import { useFormState } from "react-dom";
import { FiShoppingBag } from "react-icons/fi";

import { addItemToCart } from "@/actions/cart";

import { ActionButton } from "../UI/ActionButton";

export const AddToCartButton = ({ itemId }: { itemId: string }) => {
	const [message, formAction] = useFormState(addItemToCart, null);

	return (
		<form action={formAction}>
			<input type="text" name="itemId" value={itemId} hidden readOnly />
			<ActionButton
				leadingIcon={<FiShoppingBag className="me-2 size-5" aria-hidden />}
				className="mt-10 px-8 sm:max-w-xs"
			>
				Add to Cart
			</ActionButton>
			<p aria-live="polite" className="sr-only" role="status">
				{message}
			</p>
		</form>
	);
};
