import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatPrice = (price: number) =>
	new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(price);

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
