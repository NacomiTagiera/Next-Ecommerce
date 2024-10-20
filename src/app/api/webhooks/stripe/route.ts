/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";

import { updateOrderAfterPayment } from "@/features/cart/api/actions";
import { stripe } from "@/lib/stripe";
import { unpackPromise } from "@/lib/utils";

export async function POST(req: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		return new Response("No webhook secret", { status: 500 });
	}

	const signature = req.headers.get("stripe-signature");
	if (!signature) {
		return new Response("No signature", { status: 401 });
	}

	const [error, event] = await unpackPromise(
		stripe.webhooks.constructEventAsync(
			await req.text(),
			signature,
			process.env.STRIPE_WEBHOOK_SECRET,
		),
	);

	if (error) {
		return new Response("Invalid signature", { status: 401 });
	}

	switch (event.type) {
		case "payment_intent.succeeded": {
			const metadata = event.data.object.metadata;
			const { orderId, email, total } = metadata;

			if (!orderId || !email || !total) {
				return new Response("Missing metadata", { status: 400 });
			}

			await updateOrderAfterPayment({
				orderId,
				userEmail: email,
				total: parseInt(total, 10),
				stripeCheckoutId: event.data.object.id,
			});

			break;
		}

		default:
			console.log(`Unhandled event type: ${event.type}`);
	}

	return new Response(null, { status: 204 });
}
