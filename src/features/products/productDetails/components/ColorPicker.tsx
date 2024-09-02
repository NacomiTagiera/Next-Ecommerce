import { Picker } from "@/components/UI/Picker";

interface Props {
	colors: string[];
	activeColor: string;
	onColorChange: (color: string) => void;
}

export const ColorPicker = ({ colors, activeColor, onColorChange }: Props) => {
	if (colors.length === 0) {
		return null;
	}

	return (
		<>
			<h3 className="mb-2 text-sm font-medium">Color</h3>
			<Picker
				items={colors}
				activeItems={activeColor}
				onItemChange={(color) => onColorChange(color as string)}
				itemName="color"
				className="gap-x-3"
			/>
		</>
	);
};
