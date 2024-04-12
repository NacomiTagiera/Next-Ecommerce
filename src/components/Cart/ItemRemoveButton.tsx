"use client";

import { useTransition } from "react";

import { removeItemFromCart } from "@/actions/cart";

import { Button } from "../UI/Button";

export const ItemRemoveButton = ({ itemId }: { itemId: string }) => {
	const [isPending, startTransition] = useTransition();

	return (
		<Button
			type="submit"
			size="md"
			variant="text"
			className="p-0 text-skyfall-600 hover:text-skyfall-700"
			aria-label="Remove cart item"
			aria-disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItemFromCart(itemId);
				})
			}
		>
			{isPending ? "Removing..." : "Remove"}
		</Button>
	);
};
