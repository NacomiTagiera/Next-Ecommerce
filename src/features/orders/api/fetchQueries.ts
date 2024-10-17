import { OrdersGetByEmailDocument } from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getUserOrders = async (email: string) => {
	const { orders } = await executeGraphql({
		query: OrdersGetByEmailDocument,
		variables: { email },
		next: {
			revalidate: 60 * 60 * 24 * 7, // 1 week
			tags: ["orders"],
		},
	});

	return orders;
};
