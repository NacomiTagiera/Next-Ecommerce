import type { ComponentPropsWithRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("", {
	variants: {
		color: {
			primary: "text-zinc-900",
			error: "text-red-600",
		},
		visiblity: {
			shown: "block text-sm font-medium",
			hidden: "sr-only",
		},
	},
	defaultVariants: {
		color: "primary",
		visiblity: "shown",
	},
});

export type LabelProps = ComponentPropsWithRef<"label"> & VariantProps<typeof labelVariants>;

export const Label = ({ color, visiblity, className, ...rest }: LabelProps) => {
	return <label className={cn(labelVariants({ color, visiblity, className }))} {...rest} />;
};
