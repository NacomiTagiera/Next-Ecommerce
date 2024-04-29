"use client";

import { useEffect } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

import { deleteCartIdCookie } from "@/actions/cart";
import { formatPrice } from "@/lib/utils";

export const CartSuccessView = ({ total }: { total: number }) => {
	useEffect(() => {
		const handleDeleteCartIdCookie = async () => {
			await deleteCartIdCookie();
		};

		handleDeleteCartIdCookie().catch((error) => console.error(error));
	}, []);

	return (
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="flex items-center gap-x-1 text-4xl font-extrabold text-green-500">
				<IoCheckmarkDoneCircle aria-hidden className="size-7" />
				Success!
			</h1>
			<p className="mt-3 text-2xl font-semibold">Thank you for your purchase!</p>
			<p className="mt-2 text-xl font-medium text-zinc-800">
				Your order total was <strong>{formatPrice(total / 100)}</strong>
			</p>
			<p className="text-lg italic text-zinc-700">Receipt has been sent to your email.</p>
		</div>
	);
};
