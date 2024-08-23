"use client";

import { type ChangeEvent, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/UI/Input";
import { Label } from "@/components/UI/Label";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";

interface Props {
	id: string;
	className?: string;
}

export const SearchInput = ({ id, className }: Props) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [searchValue, setSearchValue] = useState(searchParams.get("query") || "");
	const debouncedValue = useDebounce(searchValue, 500);

	const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(value);
	};

	useEffect(() => {
		if (debouncedValue.trim().length > 2) {
			router.push(`/search/1?query=${debouncedValue.trim()}`);
		}
	}, [debouncedValue, router]);

	return (
		<div className={cn("w-full max-w-xs", className)} data-testid="search-input-wrapper">
			<Label htmlFor={id} visibility="hidden">
				Search For Products
			</Label>
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<IoMdSearch className="size-5 text-zinc-300" aria-hidden />
				</span>
				<Input
					type="search"
					id={id}
					name="search-for-products"
					value={searchValue}
					onChange={handleChange}
					placeholder="Search"
					className="pl-9"
					variant="outlined"
					spellCheck="false"
				/>
			</div>
		</div>
	);
};
