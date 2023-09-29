import { type ReadonlyURLSearchParams } from "next/navigation";

import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { PRODUCTS_PER_PAGE } from "./constants";
import {
	type SingleProductColorVariantFragment,
	type SingleProductSizeVariantFragment,
} from "@/gql/graphql";

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
	}).format(price);

export const getConvertedVariants = (
	variants: SingleProductColorVariantFragment[] | SingleProductSizeVariantFragment[] | {}[],
) => {
	if (variants.length <= 1) {
		return null;
	}

	const getFilteredVariants = (typeName: string) =>
		variants
			.filter((variant) => "__typename" in variant && variant.__typename !== typeName)
			.map((variant) => (variant as { name: string }).name);

	const result = [];

	const colors = getFilteredVariants("ProductSizeVariant");
	if (colors.length > 1) result.push({ name: "color", values: colors });

	const sizes = getFilteredVariants("ProductColorVariant");
	if (sizes.length > 1) result.push({ name: "size", values: sizes });

	return result;
};

export const paginationArgs = (page: number) => ({
	limit: PRODUCTS_PER_PAGE,
	offset: (page - 1) * PRODUCTS_PER_PAGE,
});
