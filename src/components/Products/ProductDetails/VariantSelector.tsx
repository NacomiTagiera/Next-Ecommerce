"use client";

import { type Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn, createUrl } from "@/lib/utils";

type Props = {
	variant: {
		name: string;
		values: { name: string }[];
	};
};

export const VariantSelector = ({ variant }: Props) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const hasNoOptionsOrJustOneOption = !variant.values.length || variant.values.length === 1;

	if (hasNoOptionsOrJustOneOption) {
		return null;
	}

	return (
		<dl className="mb-8">
			<dt className="mb-4 text-sm uppercase tracking-wide">{variant.name}</dt>
			<dd className="flex flex-wrap gap-3">
				{variant.values?.map((value) => {
					const variantNameLowerCase = variant.name.toLowerCase();
					const variantSearchParams = new URLSearchParams(searchParams.toString());

					variantSearchParams.set(variantNameLowerCase, value.name);
					const variantUrl = createUrl(pathname, variantSearchParams);

					const isActive = searchParams.get(variantNameLowerCase) === value.name;

					return (
						<button
							key={value.name}
							onClick={() => {
								router.replace(variantUrl as Route, {
									scroll: false,
								});
							}}
							title={`${variant.name} ${value.name}`}
							className={cn(
								"flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-pumpkin-600",
								{
									"cursor-default ring-2 ring-pumpkin-600": isActive,
								},
							)}
						>
							{value.name}
						</button>
					);
				})}
			</dd>
		</dl>
	);
};
