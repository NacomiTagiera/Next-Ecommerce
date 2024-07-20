import { Orders } from "@/components/Orders";
import { OrderListWrapper } from "@/components/Orders/OrdersWrapper";

export default function OrdersPage() {
	return (
		<OrderListWrapper>
			<Orders />
		</OrderListWrapper>
	);
}
