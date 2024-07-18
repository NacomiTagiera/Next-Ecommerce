import { cn, formatDate, formatPrice } from "@/lib/utils";

import { Button } from "../UI/Button";

type Props = {
	total: number;
	orderDate: string;
};

export const OrderItemHeader = ({ total, orderDate }: Props) => {
	const orderDateTime = new Date(orderDate).getTime();
	const isDelivered = orderDateTime - new Date().getTime() / (1000 * 60 * 60 * 24) > 7;

	return (
		<div className="pb-5 sm:flex sm:items-center sm:justify-between sm:space-x-6 sm:px-6 lg:space-x-8">
			<dl className="flex-auto space-y-6 divide-y divide-zinc-200 text-sm text-zinc-600 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:space-y-0 sm:divide-y-0 lg:w-1/2 lg:flex-none lg:gap-x-8">
				<div className="flex justify-between sm:block">
					<dt className="font-medium">Date placed</dt>
					<dd className="text-zinc-500 sm:mt-1">
						<time dateTime={orderDate}>{formatDate(orderDate)}</time>
					</dd>
				</div>
				<div className="flex justify-between pt-6 sm:block sm:pt-0">
					<dt className="font-medium">Order Status</dt>
					<dd
						className={cn(
							"font-medium sm:mt-1",
							isDelivered ? "text-green-700" : "text-skyfall-600",
						)}
					>
						{isDelivered ? "Delivered" : "Shipped"}
					</dd>
				</div>
				<div className="flex justify-between pt-6 font-medium sm:block sm:pt-0">
					<dt>Total amount</dt>
					<dd className="mt-1">{formatPrice(total / 100)}</dd>
				</div>
			</dl>
			<Button
				href="/contact"
				variant="outlined"
				size="fullWidth"
				className="mt-6 sm:mt-0 sm:w-auto"
			>
				Contact Support
			</Button>
		</div>
	);
};
