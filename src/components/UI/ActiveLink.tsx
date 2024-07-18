"use client";

import { type UrlObject } from "url";

import { type Route } from "next";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type Props<T extends string> = {
	href: Route<T> | UrlObject;
	children?: React.ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
} & LinkProps<T>;

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = true,
	className,
	activeClassName,
	...rest
}: Props<T>) => {
	const pathname = usePathname();

	const url = typeof href === "object" ? href.pathname : href;
	const query = typeof href === "object" ? href.query : {};
	const isActive = exact ? pathname === url : pathname.includes(url!);

	return (
		<Link
			href={{
				pathname: url,
				query,
			}}
			aria-current={isActive ? "page" : undefined}
			className={cn(className, isActive && activeClassName)}
			{...rest}
		>
			{children}
		</Link>
	);
};
