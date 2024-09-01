import { useCallback } from "react";

import { cn, isInArray } from "@/lib/utils";

import { PickerLabel } from "./PickerLabel";

interface Props<T> {
	items: T[];
	activeItems: T | T[];
	onItemChange: (item: T | T[] | undefined) => void;
	itemName: string;
	multiple?: boolean;
	className?: string;
}

export const Picker = <T extends string>({
	items,
	activeItems,
	onItemChange,
	multiple = false,
	itemName,
	className,
}: Props<T>) => {
	const isActive = useCallback(
		(item: T) =>
			multiple && Array.isArray(activeItems) ? isInArray(activeItems, item) : item === activeItems,
		[activeItems, multiple],
	);

	const handleChange = useCallback(
		(item: T) => {
			if (multiple && Array.isArray(activeItems)) {
				onItemChange(
					isActive(item) ? activeItems.filter((i) => i !== item) : [...activeItems, item],
				);
			} else {
				onItemChange(isActive(item) ? undefined : item);
			}
		},
		[activeItems, isActive, multiple, onItemChange],
	);

	return (
		<fieldset>
			<legend className="sr-only">Choose {itemName}</legend>
			<div className={cn("flex flex-wrap items-center gap-4", className)}>
				{items.map((item, index) => (
					<PickerLabel<T>
						key={item}
						item={item}
						itemName={itemName}
						isActive={isActive(item)}
						onChange={handleChange}
						multiple={multiple}
						index={index}
					/>
				))}
			</div>
		</fieldset>
	);
};
