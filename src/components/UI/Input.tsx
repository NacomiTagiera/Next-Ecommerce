import type { ComponentPropsWithRef } from "react";
import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

type Props = ComponentPropsWithRef<"input"> & {
	label: string;
	labelVisible?: boolean;
	Icon?: IconType;
};

export const Input = ({ label, labelVisible, Icon, id, className, ...rest }: Props) => (
	<div className={cn("h-10 w-full max-w-xs", className)}>
		<label
			htmlFor={id}
			className={cn("mb-2 block text-sm font-medium text-gray-900", !labelVisible && "sr-only")}
		>
			{label}
		</label>
		<div className="relative">
			{Icon && (
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					{<Icon className="size-5 text-gray-400" aria-hidden />}
				</span>
			)}
			<input
				id={id}
				className="size-full rounded-lg border border-solid border-transparent bg-twilight-100 p-2 pl-9 text-gray-800 outline-none transition-colors placeholder:text-gray-400 focus:border-skyfall-500"
				{...rest}
			/>
		</div>
	</div>
);
