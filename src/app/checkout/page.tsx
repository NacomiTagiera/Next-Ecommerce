import { redirect } from "next/navigation";

import { getCartFromCookies } from "@/features/cart/api/fetchQueries";
import { StripeForm } from "@/features/checkout/components/StripeForm";

interface Props {
	searchParams: {
		intent: string;
	};
}

export default async function CheckoutPage({ searchParams: { intent } }: Props) {
	const cart = await getCartFromCookies();
	if (!intent || !cart || cart.orderItems.length === 0) {
		redirect("/cart");
	}

	const total = cart?.orderItems.reduce((acc, item) => acc + item.total * item.quantity, 0) || 0;

	return <StripeForm clientSecret={intent} total={total} />;
}
