"use client";

import { useState } from "react";
import { AddressElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe, type StripeAddressElementChangeEvent } from "@stripe/stripe-js";

import { CheckoutForm } from "./CheckoutForm";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export const StripeForm = ({ clientSecret }: { clientSecret: string }) => {
	const [shipping, setShipping] = useState<StripeAddressElementChangeEvent["value"]>({
		name: "",
		address: {
			line1: "",
			line2: "",
			city: "",
			state: "",
			postal_code: "",
			country: "",
		},
	});

	return (
		<Elements
			options={{
				clientSecret,
				locale: "en",
				appearance: {
					theme: "flat",
					labels: "floating",
					variables: {
						colorPrimary: "#1d64d8",
					},
				},
			}}
			stripe={stripePromise}
		>
			<div className="flex w-full justify-center p-4 sm:p-10">
				<AddressElement
					options={{ mode: "shipping" }}
					className="w-2/3"
					onChange={(event) => {
						setShipping(event.value);
					}}
				/>
			</div>
			<CheckoutForm shipping={shipping} />
		</Elements>
	);
};
