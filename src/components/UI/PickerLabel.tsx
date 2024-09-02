import { memo } from "react";

import { cn } from "@/lib/utils";

interface Props<T> {
	item: T;
	itemName: string;
	isActive: boolean;
	onChange: (item: T) => void;
	multiple: boolean;
	index: number;
}

const PickerLabelComponent = <T extends string>({
	item,
	itemName,
	isActive,
	onChange,
	multiple,
	index,
}: Props<T>) => (
	<label
		title={item}
		className={cn("flex cursor-pointer items-center justify-center focus:outline-none", {
			"relative rounded-full p-1": itemName === "color",
			"rounded-md border border-zinc-200 bg-white p-3 text-sm font-medium uppercase hover:bg-zinc-50 sm:flex-1":
				itemName !== "color",
			"border-transparent bg-skyfall-500 text-white hover:bg-skyfall-400":
				itemName !== "color" && isActive,
		})}
		style={{
			boxShadow: itemName === "color" && isActive ? `0 0 0 3px ${item}` : "",
		}}
	>
		<input
			type={multiple ? "checkbox" : "radio"}
			name={`${itemName}-choice`}
			value={item}
			checked={isActive}
			aria-labelledby={`${itemName}-choice-${index}-label`}
			onChange={() => onChange(item)}
			className="sr-only"
		/>
		<span
			id={`${itemName}-choice-${index}-label`}
			className={cn(itemName === "color" && "sr-only")}
		>
			{item}
		</span>
		{itemName === "color" && (
			<span
				aria-hidden
				className={cn(`size-8 rounded-full border border-opacity-10`)}
				style={{ backgroundColor: item, borderColor: item }}
			></span>
		)}
	</label>
);

export const PickerLabel = memo(PickerLabelComponent) as typeof PickerLabelComponent;
