"use server";

import { revalidateTag } from "next/cache";

import { getOrCreateCart } from "@/app/api/cart";
import { executeGraphql } from "@/app/api/graphqlApi";
import { getProductByIdOrSlug } from "@/app/api/products";
import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartRemoveItemDocument,
} from "@/graphql/generated/graphql";

export const addItemToCart = async (_prev: unknown, formData: FormData) => {
	const itemId = formData.get("itemId")?.toString();

	if (!itemId) {
		return "Item ID was not provided";
	}

	const product = await getProductByIdOrSlug({ id: itemId });
	const cart = await getOrCreateCart();

	const orderItem = cart.orderItems.find((item) => item.product?.id === itemId);
	const newQuantity = orderItem ? orderItem.quantity + 1 : 1;
	const price = product.price * newQuantity;

	try {
		await executeGraphql({
			query: CartAddItemDocument,
			variables: {
				orderId: orderItem?.id || cart.id,
				itemId,
				price,
				quantity: newQuantity,
			},
			cache: "no-store",
		});

		revalidateTag("cart");
	} catch (error) {
		return "Error adding item to cart";
	}
};

export const removeItemFromCart = async (itemId: string) => {
	if (!itemId) {
		throw new Error("Item ID was not provided");
	}

	const { deleteOrderItem } = await executeGraphql({
		query: CartRemoveItemDocument,
		variables: { itemId },
		cache: "no-store",
	});

	revalidateTag("cart");
	return deleteOrderItem;
};

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	if (!itemId) {
		throw new Error("Item ID was not provided");
	}

	try {
		await executeGraphql({
			query: CartChangeItemQuantityDocument,
			variables: { itemId, quantity },
			cache: "no-store",
		});

		revalidateTag("cart");
	} catch (error) {
		throw new Error("Error changing item quantity");
	}
};
