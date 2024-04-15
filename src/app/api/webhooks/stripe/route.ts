/// <reference types="stripe-event-types" />

import type Stripe from "stripe";

import { type NextRequest } from "next/server";

import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		return new Response("No webhook secret", { status: 500 });
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		return new Response("No Stripe secret key", { status: 500 });
	}

	const signature = req.headers.get("stripe-signature");
	if (!signature) {
		return new Response("No signature", { status: 401 });
	}

	const event = stripe.webhooks.constructEvent(
		await req.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	console.log(event);

	return new Response(null, { status: 204 });
}
