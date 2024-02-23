import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { type ReadonlyURLSearchParams } from "next/navigation";

import { type VariantsType } from "@/types";

import { PRODUCTS_PER_PAGE } from "./constants";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
	const paramsString = params.toString();
	const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

	return `${pathname}${queryString}`;
};

export const formatPrice = (price: number) =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	}).format(price);

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

export const paginationArgs = (page: number) => ({
	limit: PRODUCTS_PER_PAGE,
	offset: (page - 1) * PRODUCTS_PER_PAGE,
});
