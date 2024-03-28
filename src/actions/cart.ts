"use server";

import { revalidateTag } from "next/cache";

import { addItemToCart } from "@/app/api/cart";

export const addProductToBagAction = async (formData: FormData) => {
	const productId = formData.get("productId")?.toString();

	if (!productId) {
		throw new Error("Product ID was not provided");
	}

	await addItemToCart(productId);
	revalidateTag("cart");
};
