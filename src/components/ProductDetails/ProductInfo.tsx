import { MdOutlineStar } from "react-icons/md";

import { type ProductDetailsFragment } from "@/graphql/generated/graphql";
import { cn, formatPrice } from "@/lib/utils";

import { Prose } from "../UI/Prose";

type Props = {
	product: ProductDetailsFragment;
	children?: JSX.Element | JSX.Element[];
};

export const ProductInfo = ({
	product: { name, description, price, rating = 0 },
	children,
}: Props) => (
	<>
		<h1 className="text-3xl font-bold tracking-tight text-zinc-900">{name}</h1>
		<div className="mt-3">
			<h2 className="sr-only">Product information</h2>
			<p className="text-3xl tracking-tight text-zinc-900">{formatPrice(price / 100)}</p>
		</div>
		<div className="mt-3">
			<h3 className="sr-only">Reviews</h3>
			<div className="flex items-center">
				<div className="flex items-center">
					{[0, 1, 2, 3, 4].map((rate) => (
						<MdOutlineStar
							key={rate}
							className={cn(
								Number(rating) > rate ? "text-skyfall-500" : "text-zinc-300",
								"h-5 w-5 flex-shrink-0",
							)}
							aria-hidden
						/>
					))}
				</div>
				<p className="sr-only">{rating} out of 5 stars</p>
			</div>
		</div>
		<div className="mt-10">
			<h3 className="sr-only">Description</h3>
			<Prose content={description} className="prose-base mt-4 text-zinc-700" />
		</div>
		<div className="mt-6">{children}</div>
	</>
);
