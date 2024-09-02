"use client";

import { useQueryParams } from "@/hooks/useQueryParams";

import { type VariantsType } from "../types";
import { getConvertedVariants } from "../utils";

import { ColorPicker } from "./ColorPicker";
import { SizeSelector } from "./SizeSelector";

interface Props {
	colors: VariantsType;
	sizes: VariantsType;
}

export const VariantSelector = ({ colors, sizes }: Props) => {
	const convertedVariants = getConvertedVariants({ colors, sizes });
	const { queryParams, setQueryParams } = useQueryParams<{ [key: string]: string }>();

	if (convertedVariants.length === 0) {
		return null;
	}

	return convertedVariants.map(({ name, values }) => {
		const activeValue = queryParams.get(name) || "";
		const handleVariantChange = (value: string) => {
			setQueryParams({ [name]: value });
		};

		return name.toLowerCase() === "color" ? (
			<ColorPicker
				key={name}
				colors={values}
				activeColor={activeValue}
				onColorChange={handleVariantChange}
			/>
		) : (
			<SizeSelector
				key={name}
				sizes={values}
				activeSize={activeValue}
				onSizeChange={handleVariantChange}
			/>
		);
	});
};
