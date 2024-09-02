import { useEffect, useState } from "react";

import { Range } from "@/components/UI/Range";
import { useDebounce } from "@/hooks/useDebounce";
import { useQueryParams } from "@/hooks/useQueryParams";
import { formatPrice } from "@/lib/utils";

import { priceRangeLimits } from "../constants";

export const PriceRange = () => {
	const { queryParams, setQueryParams } = useQueryParams();
	const [value, setValue] = useState<[number, number]>(
		queryParams.get("priceGt") && queryParams.get("priceLt")
			? [parseInt(queryParams.get("priceGt")!), parseInt(queryParams.get("priceLt")!)]
			: priceRangeLimits,
	);
	const debouncedValue = useDebounce(value, 500);

	useEffect(() => {
		if (debouncedValue) {
			const [min, max] = debouncedValue;
			setQueryParams({ priceGt: min.toString(), priceLt: max.toString() });
		}
	}, [debouncedValue, setQueryParams]);

	return (
		<>
			<div className="flex w-full justify-between">
				<span>{formatPrice(value[0] / 100)}</span>
				<span>{formatPrice(value[1] / 100)}</span>
			</div>
			<Range
				min={priceRangeLimits[0]}
				max={priceRangeLimits[1]}
				step={100}
				value={value}
				onChange={setValue}
				label="Price range"
			/>
		</>
	);
};
