import {
	OrderItemsPublishDocument,
	OrderPublishDocument,
	OrdersGetByEmailDocument,
} from "@/graphql/generated/graphql";

import { executeGraphql } from "./graphqlApi";

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

export const publishOrder = async (id: string) => {
	await executeGraphql({
		query: OrderPublishDocument,
		variables: { id },
	});
};

export const publishOrderItems = async (id: string) => {
	await executeGraphql({
		query: OrderItemsPublishDocument,
		variables: { orderId: id },
	});
};
