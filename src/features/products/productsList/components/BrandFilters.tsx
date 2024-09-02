import { useQueryParams } from "@/hooks/useQueryParams";
import { productBrands } from "@/lib/constants";

export const BrandFilters = () => {
	const { queryParams, setQueryParams } = useQueryParams<{ brand?: string }>();

	const activeBrand = queryParams.get("brand") || "";

	const handleChange = (brand: string) => {
		if (activeBrand === brand) {
			setQueryParams({ brand: undefined });
		} else {
			setQueryParams({ brand });
		}
	};

	return (
		<fieldset className="space-y-4">
			<legend className="sr-only">Choose a brand</legend>
			{productBrands.map((brand) => (
				<div key={brand.name} className="flex items-center gap-x-3">
					<input
						id={`filter-${brand.value}`}
						name="brand"
						type="checkbox"
						className="size-4 rounded border-zinc-300 text-skyfall-500 focus:ring-skyfall-500"
						checked={brand.value === activeBrand}
						onChange={() => handleChange(brand.value)}
					/>
					<label
						htmlFor={`filter-${brand.value}`}
						className="text-sm font-medium leading-6 text-zinc-800"
					>
						{brand.name}
					</label>
				</div>
			))}
		</fieldset>
	);
};
