"use client";

import { type ReactNode } from "react";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

type Props<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = true,
	className,
	activeClassName,
}: Props<T>) => {
	const pathname = usePathname();

	const isActive = exact
		? pathname === href
		: pathname.startsWith(href) &&
		  (pathname[href.length] === "/" || pathname.length === href.length);

	return (
		<Link href={href} className={cn(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
