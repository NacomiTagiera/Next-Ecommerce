import React from "react";
import { FiShoppingBag } from "react-icons/fi";

import Link from "next/link";

export const ShoppingBagIcon = ({ children }: { children: React.JSX.Element }) => (
	<div className="ml-3 flow-root">
		<Link
			href="/cart"
			className="group flex items-center focus:outline-none focus:ring-2 focus:ring-skyfall-300"
		>
			<FiShoppingBag
				className="h-5 w-5 text-zinc-700 transition-colors group-hover:text-skyfall-500 md:h-6 md:w-6"
				aria-hidden
			/>
			{children}
			<span className="sr-only">items in cart</span>
		</Link>
	</div>
);
