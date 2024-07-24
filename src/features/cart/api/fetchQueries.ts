import { CartCreateDocument, CartGetByIdDocument } from "@/graphql/generated/graphql";
import { getCookie, setCookie } from "@/lib/cookies";
import { executeGraphql } from "@/lib/executeGraphql";

export const getCartFromCookies = async () => {
	const cartId = getCookie("cartId");
	if (!cartId) return;

	const { order: cart } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});

	return cart;
};

export const getOrCreateCart = async () => {
	const cart = await getCartFromCookies();
	if (cart) return cart;

	const { createOrder: newCart } = await executeGraphql({
		query: CartCreateDocument,
		cache: "no-store",
		next: {
			tags: ["cart"],
		},
	});

	if (!newCart) {
		throw new Error("Failed to create cart.");
	}

	setCookie("cartId", newCart.id);

	return newCart;
};
