import { cookies } from "next/headers";

import { executeGraphql } from "./graphqlApi";
import { CartCreateDocument, CartGetByIdDocument } from "@/graphql/generated/graphql";

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			next: { tags: ["cart"], revalidate: 0 },
		});

		if (cart) {
			return cart;
		}
	}
};

export const getOrCreateCart = async () => {
	const cart = await getCartFromCookies();

	if (cart) {
		return cart;
	}

	const { createOrder: newCart } = await executeGraphql({
		query: CartCreateDocument,
		cache: "no-store",
	});

	if (!newCart) {
		throw new Error("Failed to create a cart");
	}

	cookies().set("cartId", newCart.id, {
		httpOnly: true,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
	});

	return newCart;
};
