"use client";

import { useState } from "react";
import { AddressElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe, type StripeAddressElementChangeEvent } from "@stripe/stripe-js";

import { CheckoutForm } from "./CheckoutForm";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY env variable");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

type Props = {
	clientSecret: string;
	total: number;
};

export const StripeForm = ({ clientSecret, total }: Props) => {
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
					variables: {
						colorPrimary: "#1d64d8",
					},
				},
			}}
			stripe={stripePromise}
		>
			<CheckoutForm
				shipping={shipping}
				address={
					<AddressElement
						options={{ mode: "shipping" }}
						onChange={(event) => {
							setShipping(event.value);
						}}
					/>
				}
				total={total}
			/>
		</Elements>
	);
};
