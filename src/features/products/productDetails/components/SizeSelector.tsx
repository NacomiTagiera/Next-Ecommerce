import { Picker } from "@/components/UI/Picker";

interface Props {
	sizes: string[];
	activeSize: string;
	onSizeChange: (size: string) => void;
}

export const SizeSelector = ({ sizes, activeSize, onSizeChange }: Props) => {
	if (sizes.length === 0) {
		return null;
	}

	return (
		<div className="mt-8">
			<h3 className="mb-2 text-sm font-medium">Size</h3>
			<Picker
				items={sizes}
				activeItems={activeSize}
				onItemChange={(size) => onSizeChange(size as string)}
				itemName="size"
				className="grid grid-cols-4 gap-3 sm:grid-cols-8"
			/>
		</div>
	);
};
