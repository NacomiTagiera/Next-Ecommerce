"use client";

import { useVariantSelector } from "../hooks/useVariantSelector";
import { type VariantsType } from "../types";
import { getConvertedVariants } from "../utils";

import { ColorPicker } from "./ColorPicker";
import { SizeSelector } from "./SizeSelector";

interface Props {
	variants: VariantsType;
}

export const VariantSelector = ({ variants }: Props) => {
	const convertedVariants = getConvertedVariants(variants);
	const { searchParams, handleVariantChange } = useVariantSelector();

	if (!convertedVariants.length) {
		return null;
	}

	return convertedVariants.map(({ name, values }) => {
		const activeValue = searchParams.get(name);

		return name.toLowerCase() === "color" ? (
			<ColorPicker
				key={name}
				colors={values}
				activeColor={activeValue || ""}
				onColorChange={(color) => handleVariantChange(name, color)}
			/>
		) : (
			<SizeSelector
				key={name}
				sizes={values}
				activeSize={activeValue || ""}
				onSizeChange={(size) => handleVariantChange(name, size)}
			/>
		);
	});
};
