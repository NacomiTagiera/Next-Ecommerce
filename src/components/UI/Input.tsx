import { type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
	"w-full rounded-lg border-solid border-transparent bg-twilight-100 px-2 py-1.5 outline-none transition-colors focus:ring-0",
	{
		variants: {
			color: {
				primary: "text-zinc-800 placeholder:text-zinc-400 focus:border-skyfall-500",
				error: "text-red-900 placeholder:text-red-300 focus:border-red-600",
			},
		},
		defaultVariants: {
			color: "primary",
		},
	},
);

export type InputProps = ComponentPropsWithoutRef<"input"> & VariantProps<typeof inputVariants>;

export const Input = ({ color, className, ...rest }: InputProps) => (
	<input className={cn(inputVariants({ color, className }))} {...rest} />
);
