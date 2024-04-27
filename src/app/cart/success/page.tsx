import { type Metadata } from "next";
import { redirect } from "next/navigation";

import { updateOrderAfterPayment } from "@/actions/cart";
import { stripe } from "@/lib/stripe";
import { formatPrice } from "@/lib/utils";

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
	if (!searchParams.intent_id) {
		redirect("/cart");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key not set");
	}

	const paymentIntent = await stripe.paymentIntents.retrieve(searchParams.intent_id);

	if (!paymentIntent || paymentIntent.status !== "succeeded") {
		redirect("/cart");
	}

	if (paymentIntent.metadata.orderId) {
		await updateOrderAfterPayment(
			paymentIntent.metadata.orderId,
			paymentIntent.receipt_email ?? "",
			paymentIntent.id,
		);
	}

	return (
		<>
			<h1>Success!</h1>
			<pre>{JSON.stringify(paymentIntent)}</pre>
			<p>Thank you for your purchase!</p>
			<p>Your order total was {formatPrice(paymentIntent.amount)}</p>
		</>
	);
}
