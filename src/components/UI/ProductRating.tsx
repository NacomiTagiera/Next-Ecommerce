import { RatingStar } from "./RatingStar";

type Props = {
	rating: number;
	size?: "md" | "lg";
};

export const ProductRating = ({ rating, size = "md" }: Props) => (
	<div className="flex items-center">
		<div className="flex items-center">
			{[0, 1, 2, 3, 4].map((rate) => (
				<RatingStar key={rate} active={rate < Math.round(rating)} size={size} />
			))}
		</div>
		<p className="ms-1 text-sm text-zinc-700">
			{rating.toFixed(1)}
			<span className="sr-only">out of 5 stars</span>
		</p>
	</div>
);
