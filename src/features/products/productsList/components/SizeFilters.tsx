import { Picker } from "@/components/UI/Picker";
import { useQueryParams } from "@/hooks/useQueryParams";
import { productSizes } from "@/lib/constants";

export const SizeFilters = () => {
	const { queryParams, setQueryParams } = useQueryParams();

	const activeSizes = queryParams.get("sizes")?.split(",").filter(Boolean) || [];

	return (
		<Picker
			items={productSizes}
			activeItems={activeSizes}
			onItemChange={(sizes) => {
				if (Array.isArray(sizes) && sizes.length === 0) {
					setQueryParams({ sizes: undefined });
				} else {
					setQueryParams({ sizes });
				}
			}}
			multiple
			itemName="size"
		/>
	);
};
