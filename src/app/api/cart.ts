import { cookies } from "next/headers";

import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartRemoveItemDocument,
} from "@/graphql/generated/graphql";

import { executeGraphql } from "./graphqlApi";
import { getProductByIdOrSlug } from "./products";

export const getCartById = async (id: string) => {
	const { order: cart } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: { id },
		next: {
			tags: ["cart"],
		},
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

export const addItemToCart = async (itemId: string) => {
	const product = await getProductByIdOrSlug({ id: itemId });
	const cart = await getOrCreateCart();

	const orderItem = cart.orderItems.find((item) => item.id === itemId);
	const newQuantity = orderItem ? orderItem.quantity + 1 : 1;
	const price = product.price * newQuantity;

	const { upsertOrderItem } = await executeGraphql({
		query: CartAddItemDocument,
		variables: { orderId: orderItem?.id || cart.id, itemId, price, quantity: newQuantity },
		cache: "no-store",
	});

	if (!upsertOrderItem) {
		throw new Error("Failed to add item to cart.");
	}

	return upsertOrderItem;
};

export const removeItemFromCart = async (itemId: string) => {
	const { deleteOrderItem } = await executeGraphql({
		query: CartRemoveItemDocument,
		variables: { itemId },
		cache: "no-store",
	});

	return deleteOrderItem;
};

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	const { updateOrderItem } = await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: { itemId, quantity },
		cache: "no-store",
	});

	return updateOrderItem;
};

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (!cartId) return;

	const cart = await getCartById(cartId);
	return cart;
};

export const getOrCreateCart = async () => {
	const cart = await getCartFromCookies();
	if (cart) return cart;

	const newCart = await createCart();
	cookies().set("cartId", newCart.id, {
		maxAge: 60 * 60 * 24 * 365,
		expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
		httpOnly: true,
		sameSite: "lax",
	});

	return newCart;
};
