"use client";

import { useFormStatus } from "react-dom";
import { FiShoppingBag } from "react-icons/fi";
import { LuLoader } from "react-icons/lu";

import { Button } from "../UI/Button";

export const AddToBagButton = () => {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			size="fullWidth"
			leadingIcon={!pending ? FiShoppingBag : undefined}
			className="mt-10 w-full px-8 sm:max-w-xs"
			aria-disabled={pending}
		>
			{pending ? (
				<>
					<LuLoader className="me-2 size-5 animate-spin" aria-hidden /> Processing...
				</>
			) : (
				"Add to Bag"
			)}
		</Button>
	);
};
