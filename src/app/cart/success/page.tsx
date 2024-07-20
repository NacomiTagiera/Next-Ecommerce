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

type Props = {
	searchParams: {
		intent_id: string;
	};
};

export default async function CartSuccessPage({ searchParams: { intent_id } }: Props) {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key not set");
	}

	if (!intent_id) {
		redirect("/cart");
	}

	const paymentIntent = await stripe.paymentIntents.retrieve(intent_id);

	if (!paymentIntent || paymentIntent.status !== "succeeded" || !paymentIntent.metadata.orderId) {
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
