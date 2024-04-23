import { cn } from "@/lib/utils";

import { RatingStar } from "./RatingStar";

type Props = {
	rating?: number | null;
	size?: "md" | "lg";
	hideRating?: boolean;
};

export const ProductRating = ({ rating, size = "md", hideRating }: Props) => (
	<div className="flex items-center">
		<div className="flex items-center">
			{[0, 1, 2, 3, 4].map((rate) => (
				<RatingStar key={rate} active={rate < Math.round(Number(rating))} size={size} />
			))}
		</div>
		<p className={cn("ms-1 text-sm text-zinc-700", hideRating && "sr-only")}>
			{Number(rating).toFixed(size === "md" ? 1 : 2)}
			<span className="sr-only">out of 5 stars</span>
		</p>
	</div>
);
