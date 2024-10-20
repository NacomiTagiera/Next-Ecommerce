"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { getProductByIdOrSlug } from "@/features/products/productDetails/api/fetchQueries";
import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartRemoveItemDocument,
	OrderUpdateAfterPaymentDocument,
} from "@/graphql/generated/graphql";
import { getUserEmail } from "@/lib/clerkHelpers";
import { setCookie } from "@/lib/cookies";
import { executeGraphql } from "@/lib/executeGraphql";
import { stripe } from "@/lib/stripe";
import { calculateItemsTotal } from "@/lib/utils";

import { getCartFromCookies, getOrCreateCart } from "./fetchQueries";

export const addItemToCart = async (_prev: unknown, formData: FormData) => {
	const itemId = formData.get("itemId")?.toString();

	if (!itemId) {
		return "Item ID was not provided";
	}

	const cart = await getOrCreateCart();
	const product = await getProductByIdOrSlug({ id: itemId });

	if (!product) {
		return "Product not found";
	}

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

export const removeItemFromCart = async (itemId: string, itemsLength: number) => {
	const { deleteOrderItem } = await executeGraphql({
		query: CartRemoveItemDocument,
		variables: { itemId },
		cache: "no-store",
	});

	if (itemsLength === 1) {
		setCookie("cartId", "");
	}

	return deleteOrderItem;
};

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	if (quantity < 1) {
		throw new Error("Quantity must be greater than 0");
	}

	const { updateOrderItem } = await executeGraphql({
		query: CartChangeItemQuantityDocument,
		variables: { itemId, quantity },
		cache: "no-store",
	});

	revalidateTag("cart");

	return updateOrderItem;
};

export const handlePayment = async () => {
	const cart = await getCartFromCookies();
	if (!cart || !cart.orderItems.length) {
		redirect("/cart");
	}

	const userEmail = await getUserEmail();
	const total = calculateItemsTotal(cart.orderItems);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
		receipt_email: userEmail,
		metadata: {
			orderId: cart.id,
			email: userEmail ?? "",
			total: total.toString(),
		},
	});

	if (!paymentIntent.client_secret) {
		throw new Error("Payment intent not created");
	}

	redirect(`/checkout?intent=${paymentIntent.client_secret}&intent_id=${paymentIntent.id}`);
};

interface UpdateOrderOptions {
	orderId: string;
	total: number;
	userEmail: string;
	stripeCheckoutId: string;
}

export const updateOrderAfterPayment = async ({
	orderId,
	total,
	userEmail,
	stripeCheckoutId,
}: UpdateOrderOptions) => {
	const { updateOrder } = await executeGraphql({
		query: OrderUpdateAfterPaymentDocument,
		variables: {
			id: orderId,
			email: userEmail,
			total,
			stripeCheckoutId,
		},
	});

	if (!updateOrder || !updateOrder.id) {
		throw new Error("Error updating order after payment");
	}

	revalidateTag("orders");

	return updateOrder.id;
};

export const clearCartCookie = async () => {
	setCookie("cartId", "");
};
