"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { createUrl, getConvertedVariants } from "@/lib/utils";
import { type VariantsType } from "@/types";

import { ColorPicker } from "./ColorPicker";
import { SizeSelector } from "./SizeSelector";

type Props = {
	variants: VariantsType;
};

export const VariantSelector = ({ variants }: Props) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const convertedVariants = getConvertedVariants(variants);

	if (!convertedVariants.length) {
		return null;
	}

	const handleVariantChange = (variantName: string, value: string) => {
		const variantSearchParams = new URLSearchParams(searchParams.toString());

		variantSearchParams.set(variantName, value);
		const variantUrl = createUrl(pathname, variantSearchParams);

		router.replace(variantUrl, {
			scroll: false,
		});
	};

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
