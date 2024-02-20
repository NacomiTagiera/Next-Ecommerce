"use client";

import { type ChangeEvent, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/UI/Input";
import { useDebounce } from "@/hooks/useDebounce";

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
		<Input
			type="search"
			id={id}
			name="search-for-products"
			value={searchValue}
			onChange={handleChange}
			onBlur={() => setSearchValue(searchParams.get("query") || "")}
			placeholder="Search"
			className={className}
			Icon={IoMdSearch}
			label="Search for Products"
			autoCorrect="off"
			spellCheck="false"
		/>
	);
};
