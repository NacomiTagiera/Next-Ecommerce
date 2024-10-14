"use client";

import { useFormState } from "react-dom";
import { FiShoppingBag } from "react-icons/fi";

import { useRouter } from "next/navigation";

import { ActionButton } from "@/components/UI/ActionButton";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import { addItemToCart } from "../api/actions";

export const AddToCartButton = ({ itemId }: { itemId: string }) => {
	const { visible, ref } = useIntersectionObserver<HTMLFormElement>({ threshold: 0.4 });
	const [message, formAction] = useFormState(addItemToCart, null);
	const router = useRouter();

	return (
		<>
			<form action={formAction} ref={ref}>
				<input type="text" name="itemId" value={itemId} hidden readOnly />
				<ActionButton
					leadingIcon={FiShoppingBag}
					className="mt-10 px-8 sm:max-w-xs"
					onClick={() => router.push("/cart", { scroll: false })}
				>
					Add to Cart
				</ActionButton>
				<p aria-live="polite" className="sr-only" role="status">
					{message}
				</p>
			</form>

			{!visible && (
				<form action={formAction} className="fixed bottom-0 left-0 right-0 z-10 sm:hidden">
					<input type="text" name="itemId" value={itemId} hidden readOnly />
					<ActionButton
						leadingIcon={FiShoppingBag}
						className="rounded-none"
						onClick={() => router.push("/cart", { scroll: false })}
					>
						Add to Cart
					</ActionButton>
					<p aria-live="polite" className="sr-only" role="status">
						{message}
					</p>
				</form>
			)}
		</>
	);
};
