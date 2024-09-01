"use client";

import { useFormState } from "react-dom";
import { FiShoppingBag } from "react-icons/fi";

import { useRouter } from "next/navigation";

import { ActionButton } from "@/components/UI/ActionButton";

import { addItemToCart } from "../api/actions";

export const AddToCartButton = ({ itemId }: { itemId: string }) => {
	const [message, formAction] = useFormState(addItemToCart, null);
	const router = useRouter();

	return (
		<form action={formAction}>
			<input type="text" name="itemId" value={itemId} hidden readOnly />
			<ActionButton
				leadingIcon={FiShoppingBag}
				onClick={() => router.push("/cart")}
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
