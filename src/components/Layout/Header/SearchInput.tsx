"use client";

import { type ChangeEvent, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/UI/Input";
import { Label } from "@/components/UI/Label";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";

type Props = {
	id: string;
	className?: string;
};

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
			router.push(`/search?query=${debouncedValue.trim()}`);
		}
	}, [debouncedValue, router]);

	return (
		<div className={cn("w-full max-w-xs", className)}>
			<Label htmlFor={id} visibility="hidden">
				Search For Products
			</Label>
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<IoMdSearch className="size-5 text-gray-400" aria-hidden />
				</span>
				<Input
					type="search"
					id={id}
					name="search-for-products"
					value={searchValue}
					onChange={handleChange}
					placeholder="Search"
					className="pl-9"
					spellCheck="false"
				/>
			</div>
		</div>
	);
};
