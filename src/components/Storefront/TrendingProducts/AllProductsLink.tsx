import Link from "next/link";

import { cn } from "@/lib/utils";

export const AllProductsLink = ({ className }: { className?: string }) => (
	<Link
		href="/products"
		className={cn(
			"text-base font-medium text-azure-radiance-600 hover:text-azure-radiance-500",
			className,
		)}
	>
		See all Products
		<span aria-hidden className="font-semibold">
			&nbsp;&rarr;
		</span>
	</Link>
);
