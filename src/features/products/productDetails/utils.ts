import { type ReadonlyURLSearchParams } from "next/navigation";

import { type VariantsType } from "./types";

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
	const paramsString = params.toString();
	const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

	return `${pathname}${queryString}`;
};

export const getConvertedVariants = (variants: VariantsType) => {
	if (!variants.length) {
		return [];
	}

	const extractVariantNamesByType = (typeName: RegExp) =>
		variants.reduce((names: string[], variant) => {
			if (typeName.test(variant?.__typename)) {
				names.push(variant.name);
			}
			return names;
		}, []);

	const colors = extractVariantNamesByType(/color/i);
	const sizes = extractVariantNamesByType(/size/i);

	const result = [...[{ name: "color", values: colors }], ...[{ name: "size", values: sizes }]];

	return result;
};
