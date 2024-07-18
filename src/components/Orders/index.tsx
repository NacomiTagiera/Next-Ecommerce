import { FiShoppingBag } from "react-icons/fi";

import { redirect } from "next/navigation";

import { getUserOrders } from "@/app/api/orders";
import { type OrderFragment } from "@/graphql/generated/graphql";
import { getUserEmail } from "@/lib/clerkHelpers";

import { Button } from "../UI/Button";

import { OrderItemHeader } from "./OrderItemHeader";
import { OrderItemProduct } from "./OrderItemProduct";

export const Orders = async () => {
	const userEmail = await getUserEmail();
	if (!userEmail) {
		redirect("/sign-in");
	}

	const orders = await getUserOrders(userEmail);
	if (!orders || orders.length === 0) {
		return (
			<>
				<FiShoppingBag className="size-16" aria-hidden />
				<h2 className="mt-6 text-center text-2xl font-bold">
					You haven&apos;t made any purchases yet
				</h2>
				<Button href="/products" className="mt-4 transition-shadow hover:shadow-md">
					Browse products
				</Button>
			</>
		);
	}

	const getTotalAmount = (order: OrderFragment) => {
		return order.orderItems.reduce((acc, item) => {
			if (item.product) {
				return acc + item.product.price * item.quantity;
			}
			return acc;
		}, 0);
	};

	return (
		<>
			<h2 className="sr-only">Recent orders</h2>
			{orders.map((order, index) => {
				if (!order.orderItems || order.orderItems.length === 0) return null;

				return (
					<div key={order.id} className="rounded-lg bg-white px-4 py-6">
						<OrderItemHeader total={getTotalAmount(order)} orderDate={order.updatedAt as string} />
						<table className="mt-4 w-full text-center text-zinc-500 sm:mt-6">
							<caption className="sr-only">Products</caption>
							<thead className="sr-only text-center text-sm text-zinc-500 sm:not-sr-only">
								<tr>
									<th
										scope="col"
										className="py-3 pl-2 pr-8 text-left font-normal sm:w-2/5 sm:pl-4 lg:w-1/3"
									>
										Product
									</th>
									<th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell">
										Price
									</th>
									<th scope="col" className="hidden py-3 pr-8 font-normal sm:table-cell">
										Quantity
									</th>
									<th scope="col" className="py-3 pr-2 text-right font-normal sm:pr-4">
										Info
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-zinc-200 border-zinc-200 text-sm sm:border-t">
								{order.orderItems.map((item) => (
									<OrderItemProduct key={item.id} orderItem={item} imgPriority={index === 0} />
								))}
							</tbody>
						</table>
					</div>
				);
			})}
		</>
	);
};
