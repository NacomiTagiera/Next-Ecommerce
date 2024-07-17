import { SectionHeader } from "../Storefront/SectionHeader";

export const OrderListWrapper = ({ children }: { children: React.ReactNode }) => (
	<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24">
		<SectionHeader
			title="Order history"
			description="Check the status of your recent orders. If you have any questions, please contact support."
			headerClassName="text-2xl sm:text-3xl"
		/>
		<div className="space-y-20">{children}</div>
	</section>
);
