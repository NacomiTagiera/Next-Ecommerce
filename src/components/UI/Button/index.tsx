import React, { type ComponentPropsWithRef } from "react";
import { type IconType } from "react-icons";
import { cva, type VariantProps } from "class-variance-authority";

import { type Route } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
	"inline-flex items-center justify-center font-medium shadow-sm focus:ring-4 focus:outline-none rounded-md text-center transition-colors aria-disabled:cursor-not-allowed aria-disabled:shadow-none aria-disabled:pointer-events-none",
	{
		variants: {
			variant: {
				filled:
					"text-white bg-skyfall-500 hover:bg-skyfall-600 focus:ring-skyfall-300 aria-disabled:bg-zinc-500",
				outlined: "bg-transparent border border-slate-200 hover:bg-slate-100",
				pill: "rounded-full text-white bg-skyfall-500 hover:bg-skyfall-600 focus:ring-skyfall-300",
				text: "bg-transparent text-skyfall-500 hover:text-skyfall-600 focus:ring-2 focus:ring-skyfall-300 shadow-none",
			},
			size: {
				sm: "text-sm px-3 py-2",
				md: "text-sm px-5 py-2.5",
				lg: "text-base px-5 py-3",
				fullWidth: "w-full text-base px-5 py-3",
			},
		},
		defaultVariants: {
			variant: "filled",
			size: "md",
		},
	},
);

export interface ButtonProps
	extends ComponentPropsWithRef<"button">,
		VariantProps<typeof buttonVariants> {
	href?: Route;
	leadingIcon?: IconType;
	trailingIcon?: IconType;
}

export const Button = ({
	variant,
	size,
	className,
	children,
	href,
	leadingIcon: LeadingIcon,
	trailingIcon: TrailingIcon,
	...rest
}: ButtonProps) => {
	const renderContent = () => (
		<>
			{LeadingIcon && <LeadingIcon className="me-2 size-5" aria-hidden />}
			{children}
			{TrailingIcon && <TrailingIcon className="ms-2 size-5" aria-hidden />}
		</>
	);

	if (href)
		return (
			<Link href={href} className={cn(buttonVariants({ variant, size, className }))}>
				{renderContent()}
			</Link>
		);

	return (
		<button className={cn(buttonVariants({ variant, size, className }))} {...rest}>
			{renderContent()}
		</button>
	);
};
