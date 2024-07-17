import { currentUser } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

import { Orders } from "@/components/Orders";
import { OrderListWrapper } from "@/components/Orders/OrdersWrapper";

export default async function OrdersPage() {
	const user = await currentUser();
	if (!user) {
		redirect("/sign-in");
	}

	return (
		<OrderListWrapper>
			<Orders />
		</OrderListWrapper>
	);
}
