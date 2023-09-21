import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatPrice = (price: number) =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
