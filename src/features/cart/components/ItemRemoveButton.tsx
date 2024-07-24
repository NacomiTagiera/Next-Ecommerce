"use client";

import { useTransition } from "react";

import { Button } from "@/components/UI/Button";

import { removeItemFromCart } from "../api/actions";

interface Props {
	itemId: string;
	itemsLength: number;
}

export const ItemRemoveButton = ({ itemId, itemsLength }: Props) => {
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
					await removeItemFromCart(itemId, itemsLength);
				})
			}
		>
			{isPending ? "Removing..." : "Remove"}
		</Button>
	);
};
