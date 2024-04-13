import { CartCreateDocument, CartGetByIdDocument } from "@/graphql/generated/graphql";
import { getCookie, setCookie } from "@/lib/cookies";

import { executeGraphql } from "./graphqlApi";

export const getCartById = async (id: string) => {
	const { order: cart } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: { id },
		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});

	if (!cart) {
		throw new Error("Failed to get cart.");
	}

	return cart;
};

export const createCart = async () => {
	const { createOrder } = await executeGraphql({
		query: CartCreateDocument,
		cache: "no-store",
	});

	if (!createOrder) {
		throw new Error("Failed to create cart.");
	}

	return createOrder;
};

export const getCartFromCookies = async () => {
	const cartId = getCookie("cartId");
	if (!cartId) return;

	const cart = await getCartById(cartId);
	return cart;
};

export const getOrCreateCart = async () => {
	const cart = await getCartFromCookies();
	if (cart) return cart;

	const newCart = await createCart();
	setCookie("cartId", newCart.id);

	return newCart;
};
