import { type ComponentPropsWithRef } from "react";
import { type IconType } from "react-icons";
import { type VariantProps } from "class-variance-authority";

import { type Route } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./Button";

export type IconButtonProps = ComponentPropsWithRef<"button"> &
	VariantProps<typeof buttonVariants> & {
		icon: IconType;
		hiddenLabel: string;
		href?: Route;
	};

export const IconButton = ({
	variant = "text",
	size,
	className,
	icon: Icon,
	hiddenLabel,
	href,
	...rest
}: IconButtonProps) => {
	if (href)
		return (
			<Link href={href} className={cn(buttonVariants({ variant, size, className }), "p-0")}>
				<span className="sr-only">{hiddenLabel}</span>
				<Icon
					className="size-5 text-zinc-700 transition-colors hover:text-skyfall-500 md:size-6"
					aria-hidden
				/>
			</Link>
		);

	return (
		<button
			type="button"
			className={cn(buttonVariants({ variant, size, className }), "p-0")}
			{...rest}
		>
			<span className="sr-only">{hiddenLabel}</span>
			<Icon
				className="size-5 text-zinc-700 transition-colors hover:text-skyfall-500 md:size-6"
				aria-hidden
			/>
		</button>
	);
};
