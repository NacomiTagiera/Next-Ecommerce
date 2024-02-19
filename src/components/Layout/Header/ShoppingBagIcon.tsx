import { FiShoppingBag } from "react-icons/fi";

import Link from "next/link";

export const ShoppingBagIcon = () => (
	<div className="ml-3 flow-root">
		<Link href="/cart" className="group flex items-center">
			<FiShoppingBag
				className="h-5 w-5 text-zinc-700 transition-colors group-hover:text-skyfall-500 md:h-6 md:w-6"
				aria-hidden
			/>
			<span className="ml-1 font-semibold group-hover:text-skyfall-500">0</span>
			<span className="sr-only">items in cart</span>
		</Link>
	</div>
);
