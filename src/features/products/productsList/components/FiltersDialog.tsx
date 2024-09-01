import { Dialog } from "@/components/UI/Dialog";

import { BrandFilters } from "./BrandFilters";
import { ColorFilters } from "./ColorFilters";
import { PriceRange } from "./PriceRange";
import { ProductFilterGroupWrapper } from "./ProductFilterGroupWrapper";
import { RatingFilters } from "./RatingFilters";
import { SizeFilters } from "./SizeFilters";

interface Props {
	open: boolean;
	onClose: () => void;
}

export const FiltersDialog = ({ open, onClose }: Props) => (
	<Dialog open={open} onClose={onClose} header="Filters" showHeader>
		<form className="mt-4">
			<ProductFilterGroupWrapper name="Color">
				<ColorFilters />
			</ProductFilterGroupWrapper>
			<ProductFilterGroupWrapper name="Size">
				<SizeFilters />
			</ProductFilterGroupWrapper>
			<ProductFilterGroupWrapper name="Brand">
				<BrandFilters />
			</ProductFilterGroupWrapper>
			<ProductFilterGroupWrapper name="Rating">
				<RatingFilters />
			</ProductFilterGroupWrapper>
			<ProductFilterGroupWrapper name="Price">
				<PriceRange />
			</ProductFilterGroupWrapper>
		</form>
	</Dialog>
);
