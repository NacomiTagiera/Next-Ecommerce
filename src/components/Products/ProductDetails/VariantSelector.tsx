"use client";

import { type Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn, createUrl, getConvertedVariants } from "@/lib/utils";
import {
	type SingleProductColorVariantFragment,
	type SingleProductSizeVariantFragment,
} from "@/graphql/generated/graphql";

type Props = {
	variants: SingleProductColorVariantFragment[] | SingleProductSizeVariantFragment[] | {}[];
};

export const VariantSelector = ({ variants }: Props) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const convertedVariants = getConvertedVariants(variants);

	if (!convertedVariants) {
		return null;
	}

	return convertedVariants.map((variant) => (
		<dl className="mb-8" key={variant.name}>
			<dt className="mb-4 text-sm uppercase tracking-wide">{variant.name}</dt>
			<dd className="flex flex-wrap gap-3">
				{variant.values.map((value) => {
					const variantSearchParams = new URLSearchParams(searchParams.toString());

					variantSearchParams.set(variant.name, value);
					const variantUrl = createUrl(pathname, variantSearchParams);

					const isActive = searchParams.get(variant.name) === value;

					return (
						<button
							key={value}
							onClick={() => {
								router.replace(variantUrl as Route, {
									scroll: false,
								});
							}}
							title={`${variant.name} ${value}`}
							className={cn(
								"flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-pumpkin-600",
								{
									"cursor-default ring-2 ring-pumpkin-600": isActive,
								},
							)}
						>
							{value}
						</button>
					);
				})}
			</dd>
		</dl>
	));
};
