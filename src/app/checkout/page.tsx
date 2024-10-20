import { redirect } from "next/navigation";

import { getCartFromCookies } from "@/features/cart/api/fetchQueries";
import { StripeForm } from "@/features/checkout/components/StripeForm";
import { calculateItemsTotal } from "@/lib/utils";

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

	return <StripeForm clientSecret={intent} total={calculateItemsTotal(cart.orderItems)} />;
}
