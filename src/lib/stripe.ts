import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
	apiVersion: "2024-04-10",
	typescript: true,
	appInfo: {
		name: "Next Sports",
		version: "0.1.0",
	},
});
