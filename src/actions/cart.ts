"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

import { getCartFromCookies, getOrCreateCart } from "@/app/api/cart";
import { executeGraphql } from "@/app/api/graphqlApi";
import { getProductByIdOrSlug } from "@/app/api/products";
import {
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
	CartRemoveItemDocument,
	OrderUpdateAfterPaymentDocument,
} from "@/graphql/generated/graphql";
import { getUserEmail } from "@/lib/clerkHelpers";
import { setCookie } from "@/lib/cookies";
import { stripe } from "@/lib/stripe";

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

	const paymentIntent = await stripe.paymentIntents.create({
		amount: cart.orderItems.reduce((total, item) => total + item.total * item.quantity, 0),
		currency: "usd",
		automatic_payment_methods: {
			enabled: true,
		},
		receipt_email: userEmail,
		metadata: {
			orderId: cart.id,
		},
	});

	if (!paymentIntent.client_secret) {
		throw new Error("Payment intent not created");
	}

	redirect(`/checkout?intent=${paymentIntent.client_secret}&intent_id=${paymentIntent.id}`);
};

export const updateOrderAfterPayment = async (
	orderId: string,
	userEmail: string,
	stripeCheckoutId: string,
) => {
	const { updateOrder } = await executeGraphql({
		query: OrderUpdateAfterPaymentDocument,
		variables: { id: orderId, email: userEmail, stripeCheckoutId },
	});

	if (!updateOrder || !updateOrder.id) {
		throw new Error("Error updating order after payment");
	}

	return updateOrder.id;
};

export const deleteCartIdCookie = async () => {
	setCookie("cartId", "");
};
