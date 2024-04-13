"use client";

import { IoMdClose } from "react-icons/io";

import { useRouter } from "next/navigation";

import { IconButton } from "../UI/IconButton";

export const CartModalHeader = () => {
	const router = useRouter();

	return (
		<div className="flex items-start justify-between">
			<h1 className="text-lg font-medium" id="cart-modal-title">
				Shopping Cart
			</h1>
			<IconButton icon={IoMdClose} hiddenLabel="Close cart modal" onClick={() => router.back()} />
		</div>
	);
};
