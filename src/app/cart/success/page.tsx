import { type Metadata } from "next";
import { redirect } from "next/navigation";

import { updateOrderAfterPayment } from "@/actions/cart";
import { CartSuccessView } from "@/components/Cart/CartSuccessView";
import { stripe } from "@/lib/stripe";

export const metadata: Metadata = {
	title: "Success",
	description: "Your purchase was successful",
	openGraph: {
		title: "Success",
		description: "Your purchase was successful",
	},
};

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { intent_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key not set");
	}

	const paymentIntent = await stripe.paymentIntents.retrieve(searchParams.intent_id);

	if (
		!searchParams.intent_id ||
		!paymentIntent ||
		paymentIntent.status !== "succeeded" ||
		!paymentIntent.metadata.orderId
	) {
		redirect("/cart");
	}

	await updateOrderAfterPayment({
		orderId: paymentIntent.metadata.orderId,
		userEmail: paymentIntent.receipt_email ?? "",
		total: paymentIntent.amount,
		stripeCheckoutId: paymentIntent.id,
	});

	return <CartSuccessView total={paymentIntent.amount} />;
}
