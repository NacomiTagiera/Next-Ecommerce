import type { ComponentPropsWithRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textareaVariants = cva(
	"block size-full min-h-[100px] resize-none py-1.5 rounded-lg border-solid border-transparent bg-twilight-100 px-2 outline-none transition-colors",
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

type TextareaProps = ComponentPropsWithRef<"textarea"> & VariantProps<typeof textareaVariants>;

export const Textarea = ({ color, className, ...rest }: TextareaProps) => {
	return <textarea className={cn(textareaVariants({ color, className }))} {...rest} />;
};
