import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { PRODUCTS_PER_PAGE } from "./constants";

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

export const paginationArgs = (page: number) => ({
	limit: PRODUCTS_PER_PAGE,
	offset: (page - 1) * PRODUCTS_PER_PAGE,
});
