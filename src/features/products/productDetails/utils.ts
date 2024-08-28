import { type VariantsType } from "./types";

export const getConvertedVariants = ({
	colors,
	sizes,
}: {
	colors: VariantsType;
	sizes: VariantsType;
}) => {
	if (colors.length === 0 && sizes.length === 0) {
		return [];
	}

	const convertedColors = colors.map((color) => color.name);
	const convertedSizes = sizes.map((size) => size.name);

	const result = [
		...[{ name: "color", values: convertedColors }],
		...[{ name: "size", values: convertedSizes }],
	];

	return result;
};
