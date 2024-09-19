import { Picker } from "@/components/UI/Picker";
import { useQueryParams } from "@/hooks/useQueryParams";
import { productColors } from "@/lib/constants";

export const ColorFilters = () => {
	const { queryParams, setQueryParams } = useQueryParams();

	const activeColors = queryParams.get("colors")?.split(",").filter(Boolean) || [];

	return (
		<Picker
			items={productColors}
			activeItems={activeColors}
			onItemChange={(colors) => {
				if (Array.isArray(colors) && colors.length === 0) {
					setQueryParams({ colors: undefined });
				} else {
					setQueryParams({ colors });
				}
			}}
			multiple
			itemName="color"
		/>
	);
};
