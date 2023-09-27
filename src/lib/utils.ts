import { type ReadonlyURLSearchParams } from "next/navigation";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { PRODUCTS_PAGE_SIZE } from "./constants";

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

export const paginationArgs = (page: number) => ({
	limit: PRODUCTS_PAGE_SIZE,
	offset: (page - 1) * PRODUCTS_PAGE_SIZE,
});
