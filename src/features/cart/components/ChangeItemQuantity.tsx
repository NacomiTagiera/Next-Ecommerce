"use client";

import { useOptimistic } from "react";

import { useRouter } from "next/navigation";

import { changeItemQuantity } from "../api/actions";

import { QuantityButton } from "./QuantityButton";

interface Props {
	itemId: string;
	quantity: number;
}

export const ChangeItemQuantity = ({ itemId, quantity }: Props) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);
	const router = useRouter();

	return (
		<form className="flex h-9 flex-row items-center rounded-full border border-zinc-300">
			<QuantityButton
				type="minus"
				disabled={optimisticQuantity <= 1}
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
					router.refresh();
				}}
			/>
			<p className="w-6 text-center">
				<span className="w-full text-sm">{optimisticQuantity}</span>
			</p>
			<QuantityButton
				type="plus"
				disabled={optimisticQuantity >= 99}
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
					router.refresh();
				}}
			/>
		</form>
	);
};
