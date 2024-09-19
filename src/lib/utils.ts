import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { type ReadonlyURLSearchParams } from "next/navigation";

import { type ProductQueryParams } from "@/types";

import { productColors, PRODUCTS_PER_PAGE, productSizes } from "./constants";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const formatPrice = (price: number) =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);

export const formatDate = (date: unknown) =>
	new Date(String(date)).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});

export const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

export const safeParseInt = (value: string | null, defaultValue: number) => {
	const parsed = parseInt(value ?? "", 10);
	return isNaN(parsed) ? defaultValue : parsed;
};

export const paginationArgs = (page: number) => ({
	limit: PRODUCTS_PER_PAGE,
	offset: (page - 1) * PRODUCTS_PER_PAGE,
});

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
	const paramsString = params.toString();
	const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

	return `${pathname}${queryString}`;
};

export const parseSearchParams = (
	searchParams: { [key: string]: string | string[] | undefined },
	page?: number,
): ProductQueryParams => {
	return {
		priceGt: searchParams.priceGt ? parseInt(searchParams.priceGt as string, 10) : 0,
		priceLt: searchParams.priceLt
			? parseInt(searchParams.priceLt as string, 10)
			: Number.MAX_SAFE_INTEGER,
		ratingGt: searchParams.ratingGt ? parseFloat(searchParams.ratingGt as string) : 0,
		ratingLt: searchParams.ratingLt ? parseFloat(searchParams.ratingLt as string) : 5,
		colors:
			searchParams.colors && typeof searchParams.colors === "string"
				? searchParams.colors.split(",")
				: productColors,
		sizes:
			searchParams.sizes && typeof searchParams.sizes === "string"
				? searchParams.sizes.split(",")
				: productSizes,
		brand: searchParams.brand ? (searchParams.brand as string) : "",
		orderBy: searchParams.orderBy
			? (searchParams.orderBy as ProductQueryParams["orderBy"])
			: undefined,
		page: page || 1,
	};
};

export const isInArray = <T>(array: T[], value: T) => array.includes(value);
