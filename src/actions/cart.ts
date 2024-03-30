"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { addItemToCart } from "@/app/api/cart";

export const addProductToCartAction = async (formData: FormData) => {
	const productId = formData.get("productId")?.toString();

	if (!productId) {
		throw new Error("Product ID was not provided");
	}

	await addItemToCart(productId);
	revalidateTag("cart");
	redirect("/cart");
};
