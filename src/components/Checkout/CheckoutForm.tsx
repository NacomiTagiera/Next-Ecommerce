import { type FormEvent, useEffect, useState } from "react";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { type StripeAddressElementChangeEvent } from "@stripe/stripe-js";

import { useSearchParams } from "next/navigation";

import { Button } from "../UI/Button";

import "./stripe.css";

type Props = {
	shipping: StripeAddressElementChangeEvent["value"];
};

export function CheckoutForm({ shipping }: Props) {
	const stripe = useStripe();
	const elements = useElements();
	const searchParams = useSearchParams();
	const intent_id = searchParams.get("intent_id") ?? "";

	const [message, setMessage] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (!stripe) {
			return;
		}

		const clientSecret = new URLSearchParams(window.location.search).get(
			"payment_intent_client_secret",
		);

		if (!clientSecret) {
			return;
		}

		stripe
			.retrievePaymentIntent(clientSecret)
			.then(({ paymentIntent }) => {
				switch (paymentIntent?.status) {
					case "succeeded":
						setMessage("Payment succeeded!");
						break;
					case "processing":
						setMessage("Your payment is processing.");
						break;
					case "requires_payment_method":
						setMessage("Your payment was not successful, please try again.");
						break;
					default:
						setMessage("Something went wrong.");
						break;
				}
			})
			.catch(console.error);
	}, [stripe]);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		setIsLoading(true);

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${process.env.NEXT_PUBLIC_URL}/cart/success?intent_id=${intent_id}`,
				shipping: {
					name: shipping.name,
					address: {
						line1: shipping.address.line1,
						line2: shipping.address.line2 ?? undefined,
						city: shipping.address.city,
						state: shipping.address.state,
						postal_code: shipping.address.postal_code,
						country: shipping.address.country,
					},
				},
			},
		});

		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message ?? "Something went wrong");
		} else {
			setMessage("An unexpected error occurred.");
		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: "tabs",
	} as const;

	const requiredShippingFields =
		shipping?.name &&
		shipping?.address.line1 &&
		shipping?.address.city &&
		shipping?.address.state &&
		shipping?.address.postal_code &&
		shipping?.address.country;

	return (
		<div className="stripe">
			<form id="payment-form" onSubmit={handleSubmit}>
				<PaymentElement id="payment-element" options={paymentElementOptions} />
				<Button
					size="fullWidth"
					disabled={isLoading || !stripe || !elements || !requiredShippingFields}
					id="submit"
				>
					<span id="button-text">
						{isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
					</span>
				</Button>
				{message && <div id="payment-message">{message}</div>}
			</form>
		</div>
	);
}
