import { RatingStar } from "../UI/RatingStar";

type Props = {
	value: number;
	onChange: (value: number) => void;
};

export const StarRatingInput = ({ value, onChange }: Props) => (
	<fieldset aria-labelledby="rating-label" className="flex items-center">
		{[...Array<number>(5)].map((_, index) => {
			const ratingValue = index + 1;

			return (
				<label key={index}>
					<input
						className="sr-only"
						type="radio"
						name="rating"
						value={ratingValue}
						checked={ratingValue === value}
						aria-label={`Rate ${ratingValue} star`}
						onChange={() => onChange(ratingValue)}
					/>
					<RatingStar active={ratingValue <= value} size="lg" />
				</label>
			);
		})}
	</fieldset>
);
