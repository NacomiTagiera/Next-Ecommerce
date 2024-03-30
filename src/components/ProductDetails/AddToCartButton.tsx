"use client";

import { useTransition } from "react";
import { FiShoppingBag } from "react-icons/fi";

import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

import { useCartCount } from "../Layout/Header/CartCountContext";
import { Button } from "../UI/Button";

export const AddToCartButton = ({ initialCartCount }: { initialCartCount: number }) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [, setOptimisticCartCount] = useCartCount(initialCartCount);

	const addToCart = () => {
		setOptimisticCartCount(initialCartCount + 1);

		document.cookie = `cartCount=${initialCartCount + 1}; path=/; max-age=${60 * 60 * 24 * 30}};`;

		startTransition(() => {
			setOptimisticCartCount(null);
			router.refresh();
		});
	};

	return (
		<Button
			type="submit"
			size="fullWidth"
			className={cn("mt-10 px-8 sm:max-w-xs", {
				"cursor-wait": isPending,
			})}
			aria-disabled={isPending}
			onClick={addToCart}
			leadingIcon={FiShoppingBag}
		>
			Add to Cart
		</Button>
	);
};
