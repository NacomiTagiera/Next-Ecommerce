import { type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
	"block size-full min-h-[100px] resize-none border-0 py-1.5 transition-colors duration-200 ease-in-out sm:text-sm sm:leading-6",
	{
		variants: {
			variant: {
				standard: "peer focus:ring-0",
				filled: "peer bg-zinc-50 hover:bg-zinc-100 focus:ring-0 focus:bg-zinc-50",
				outlined: "rounded-md ring-1 ring-inset focus:ring-2 focus:ring-inset",
			},
			color: {
				primary:
					"text-zinc-800 ring-zinc-300 hover:ring-zinc-400 placeholder:text-zinc-400 focus:ring-skyfall-500",
				error:
					"text-red-800 ring-red-400 hover:ring-red-500 placeholder:text-red-400 focus:ring-red-600",
			},
		},
		defaultVariants: {
			variant: "standard",
			color: "primary",
		},
	},
);

export type TextareaProps = ComponentPropsWithoutRef<"textarea"> &
	VariantProps<typeof textareaVariants>;

export const Textarea = ({ variant, color, className, ...rest }: TextareaProps) => {
	const textarea = (
		<textarea className={cn(textareaVariants({ variant, color, className }))} {...rest} />
	);

	if (variant === "outlined") {
		return textarea;
	}

	return (
		<div className="relative">
			{textarea}
			<div
				aria-hidden
				className={cn(
					"absolute inset-x-0 bottom-0 border-t transition-colors duration-200 ease-in-out peer-hover:border-t-2 peer-focus:border-t-2",
					{
						"border-zinc-300 peer-hover:border-zinc-400 peer-focus:border-skyfall-500":
							color === "primary",
						"border-red-400 peer-hover:border-red-500 peer-focus:border-red-600": color === "error",
					},
				)}
			/>
		</div>
	);
};
