import { redirect } from "next/navigation";

import { StripeForm } from "@/components/Checkout/StripeForm";

export default async function CheckoutPage({ searchParams }: { searchParams: { intent: string } }) {
	if (!searchParams.intent) {
		redirect("/cart");
	}

	return (
		<section className="mx-auto flex max-w-md flex-col gap-4 overflow-x-auto p-4 sm:max-w-2xl sm:p-12 sm:py-8 md:max-w-4xl lg:max-w-7xl lg:flex-row">
			<StripeForm clientSecret={searchParams.intent} />
		</section>
	);
}
