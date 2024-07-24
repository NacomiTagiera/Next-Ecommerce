import { Orders } from "@/features/orders/components/Orders";
import { OrderListWrapper } from "@/features/orders/components/OrdersWrapper";

export default function OrdersPage() {
	return (
		<OrderListWrapper>
			<Orders />
		</OrderListWrapper>
	);
}
