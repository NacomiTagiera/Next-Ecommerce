"use client";

import { useFormStatus } from "react-dom";
import { LuLoader } from "react-icons/lu";

import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "./Button";

type Props = ButtonProps;

export const ActionButton = ({ children, className, leadingIcon, ...rest }: Props) => {
	const { pending } = useFormStatus();

	return (
		<Button
			type="submit"
			size="fullWidth"
			aria-disabled={pending}
			leadingIcon={pending ? leadingIcon : undefined}
			className={cn("px-8", className, {
				"cursor-wait": pending,
			})}
			{...rest}
		>
			{pending ? (
				<>
					<LuLoader className="me-2 size-5 animate-spin" aria-hidden /> Processing...
				</>
			) : (
				children
			)}
		</Button>
	);
};
