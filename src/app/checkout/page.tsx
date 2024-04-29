import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

import { StripeForm } from "@/components/Checkout/StripeForm";

import { getCartFromCookies } from "../api/cart";

export default async function CheckoutPage({ searchParams }: { searchParams: { intent: string } }) {
	const cart = await getCartFromCookies();
	if (!searchParams.intent || !cart || cart.orderItems.length === 0) {
		redirect("/cart");
	}

	const user = await currentUser();
	if (!user) {
		redirect("/login");
	}

	const total = cart?.orderItems.reduce((acc, item) => acc + item.total * item.quantity, 0) || 0;

	return <StripeForm clientSecret={searchParams.intent} total={total} />;
}
