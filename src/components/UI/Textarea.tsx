import { type ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
	"block size-full min-h-[100px] resize-none rounded-lg border-solid border-transparent bg-twilight-100 px-2 py-1.5 outline-none transition-colors focus:ring-0",
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

export type TextareaProps = ComponentPropsWithoutRef<"textarea"> &
	VariantProps<typeof textareaVariants>;

export const Textarea = ({ color, className, ...rest }: TextareaProps) => (
	<textarea className={cn(textareaVariants({ color, className }))} {...rest} />
);
