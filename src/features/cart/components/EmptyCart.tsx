"use client";

import { FiArrowLeft, FiShoppingBag } from "react-icons/fi";

import { useRouter } from "next/navigation";

import { Button } from "@/components/UI/Button";

export const EmptyCart = () => {
	const router = useRouter();

	return (
		<div className="col-span-full mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
			<FiShoppingBag className="size-16" aria-hidden />
			<h2 className="mt-6 text-center text-2xl font-bold">Your cart is empty.</h2>

			<Button leadingIcon={FiArrowLeft} className="mt-4" onClick={() => router.back()}>
				Continue shopping
			</Button>
		</div>
	);
};
