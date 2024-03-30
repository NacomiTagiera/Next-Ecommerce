"use client";

import { useCartCount } from "./CartCountContext";

export const CartCount = ({ initialCartCount }: { initialCartCount: number }) => {
	const [count] = useCartCount(initialCartCount);
	return <span className="ml-1 font-semibold group-hover:text-skyfall-500">{count}</span>;
};
