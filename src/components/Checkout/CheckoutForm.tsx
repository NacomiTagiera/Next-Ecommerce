import { type FormEvent, useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { type StripeAddressElementChangeEvent } from "@stripe/stripe-js";

import { useSearchParams } from "next/navigation";

import { formatPrice } from "@/lib/utils";

import { CartSummary } from "../Cart/CartSummary";
import { Button } from "../UI/Button";

type Props = {
	address: React.ReactNode;
	shipping: StripeAddressElementChangeEvent["value"];
	total: number;
};

export function CheckoutForm({ address, total, shipping }: Props) {
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

	const requiredShippingFields =
		shipping?.name &&
		shipping?.address.line1 &&
		shipping?.address.city &&
		shipping?.address.state &&
		shipping?.address.postal_code &&
		shipping?.address.country;

	return (
		<section className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
			<h1 className="sr-only">Checkout</h1>
			<form
				id="payment-form"
				className="lg:total-start lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16"
				onSubmit={handleSubmit}
			>
				<div className="lg:col-span-7">
					<div>
						<h2 className="mb-4 text-xl font-medium">Payment</h2>
						<PaymentElement id="payment-element" options={{ layout: "tabs" }} />
					</div>
					<div className="mt-10 border-t border-zinc-300 pt-10">
						<h2 className="mb-4 text-xl font-medium">Shipping Information</h2>
						{address}
					</div>
				</div>
				<CartSummary price={formatPrice(total / 100)} className="mt-10 shadow-sm">
					<Button
						type="submit"
						size="fullWidth"
						aria-disabled={isLoading || !stripe || !elements || !requiredShippingFields}
						className="mt-8 aria-disabled:cursor-not-allowed"
					>
						<span id="button-text">
							{isLoading ? (
								<LuLoader className="me-2 size-5 animate-spin" aria-hidden />
							) : (
								"Pay now"
							)}
						</span>
					</Button>
					{message && <div id="payment-message">{message}</div>}
				</CartSummary>
			</form>
		</section>
	);
}
