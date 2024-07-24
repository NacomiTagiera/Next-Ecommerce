import { LuLoader } from "react-icons/lu";
import { PaymentElement } from "@stripe/react-stripe-js";
import { type StripeAddressElementChangeEvent } from "@stripe/stripe-js";

import { Button } from "@/components/UI/Button";
import { CartSummary } from "@/features/cart/components/CartSummary";
import { formatPrice } from "@/lib/utils";

import { useCheckout } from "../hooks/useCheckout";

interface Props {
	address: React.ReactNode;
	shipping: StripeAddressElementChangeEvent["value"];
	total: number;
}

export function CheckoutForm({ address, total, shipping }: Props) {
	const { handleSubmit, elements, isLoading, message, requiredShippingFields, stripe } =
		useCheckout(shipping);

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
						className="mt-8 aria-disabled:hover:cursor-not-allowed"
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
