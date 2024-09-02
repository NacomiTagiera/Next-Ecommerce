import { Label } from "@/components/UI/Label";
import { ProductRating } from "@/components/UI/ProductRating";
import { useQueryParams } from "@/hooks/useQueryParams";
import { ratings } from "@/lib/constants";

export const RatingFilters = () => {
	const { queryParams, setQueryParams } = useQueryParams();

	const activeRatingGt = queryParams.get("ratingGt");
	const activeRatingLt = queryParams.get("ratingLt");

	const handleChange = (ratingGt: number, ratingLt: number) => {
		if (activeRatingGt === ratingGt.toString() && activeRatingLt === ratingLt.toString()) {
			setQueryParams({ ratingGt: undefined, ratingLt: undefined });
		} else {
			setQueryParams({ ratingGt: ratingGt.toString(), ratingLt: ratingLt.toString() });
		}
	};

	return (
		<fieldset className="space-y-4">
			<legend className="sr-only">Choose rating</legend>
			{ratings.map(({ stars, ratingGt, ratingLt }) => (
				<div key={stars} className="flex items-center gap-x-3">
					<Label htmlFor={`filter-${stars}`} visibility="hidden">
						{stars} stars
					</Label>
					<input
						id={`filter-${stars}`}
						name="rating"
						type="checkbox"
						className="size-4 border-zinc-300 text-skyfall-500 focus:ring-skyfall-500"
						checked={
							activeRatingGt === ratingGt.toString() && activeRatingLt === ratingLt.toString()
						}
						onChange={() => handleChange(ratingGt, ratingLt)}
					/>
					<ProductRating rating={stars} size="lg" hideRating />
				</div>
			))}
		</fieldset>
	);
};
