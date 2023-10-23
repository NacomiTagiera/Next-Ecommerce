"use client";

import { type ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { useDebounce } from "@/hooks/useDebounce";

export const SearchForProducts = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [searchValue, setSearchValue] = useState(searchParams.get("query") || "");
	const debouncedValue = useDebounce(searchValue, 500);

	const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
		if (value === "") {
			router.back();
		}

		setSearchValue(value);
	};

	useEffect(() => {
		if (debouncedValue) {
			router.push(`/search?query=${debouncedValue.trim()}`);
		}
	}, [debouncedValue, router]);

	return (
		<div className="w-full max-w-lg lg:max-w-xs">
			<label htmlFor="search" className="sr-only">
				Search for products
			</label>
			<div className="relative">
				<span className="absolute inset-y-0 left-0 ms-2 flex items-center">
					<Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
				</span>
				<input
					className="w-full rounded-md border-0 bg-slate-50 py-2 pl-11 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"
					type="search"
					id="search"
					placeholder="Search for products..."
					value={searchValue}
					aria-label="Search for products"
					onChange={handleChange}
					onBlur={() => setSearchValue("")}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="false"
				/>
			</div>
		</div>
	);
};
