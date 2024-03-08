"use client";

import { useFormStatus } from "react-dom";
import { FiShoppingBag } from "react-icons/fi";
import { LuLoader } from "react-icons/lu";

import { Button } from "../UI/Button";

export const AddToCartButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			size="fullWidth"
			leadingIcon={!pending ? FiShoppingBag : undefined}
			className="mt-10 max-w-xs px-8"
			aria-disabled={pending}
		>
			{pending ? (
				<>
					<LuLoader className="me-2 size-5 animate-spin" aria-hidden /> Processing...
				</>
			) : (
				"Add to Cart"
			)}
		</Button>
	);
};
