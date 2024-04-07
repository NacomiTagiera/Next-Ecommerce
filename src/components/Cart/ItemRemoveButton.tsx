"use client";

import { useTransition } from "react";

import { useRouter } from "next/navigation";

import { removeItemFromCart } from "@/actions/cart";

import { Button } from "../UI/Button";

export const ItemRemoveButton = ({ itemId }: { itemId: string }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<Button
			type="submit"
			size="sm"
			variant="text"
			className="p-0"
			aria-label="Remove cart item"
			aria-disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItemFromCart(itemId);
					router.refresh();
				})
			}
		>
			{isPending ? "Removing..." : "Remove"}
		</Button>
	);
};
