"use client";

import { useTransition } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { LuLoader } from "react-icons/lu";

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

		document.cookie = `cartCount=${initialCartCount + 1}; expires=${new Date(Date.now() + 60 * 60 * 24 * 30 * 1000).toISOString()}; max-age=${60 * 60 * 24 * 30}; SameSite=Lax;`;

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
			leadingIcon={!isPending ? FiShoppingBag : undefined}
		>
			{isPending ? (
				<>
					<LuLoader className="me-2 size-5 animate-spin" aria-hidden /> Processing...
				</>
			) : (
				"Add to Cart"
			)}
		</Button>
	);
};
