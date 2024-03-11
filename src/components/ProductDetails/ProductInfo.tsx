import { type ProductDetailsFragment } from "@/graphql/generated/graphql";
import { formatPrice } from "@/lib/utils";

import { SectionHeader } from "../Storefront/SectionHeader";
import { ProductRating } from "../UI/ProductRating";
import { Prose } from "../UI/Prose";

type Props = {
	product: ProductDetailsFragment;
	children?: JSX.Element | JSX.Element[];
};

export const ProductInfo = ({ product: { name, description, price, rating }, children }: Props) => (
	<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
		<SectionHeader
			title={name}
			description={formatPrice(price / 100)}
			className="mb-0 max-w-none text-3xl sm:flex sm:items-center sm:justify-between"
			headerClassName="leading-tight"
			descriptionClassName="mt-3 !text-3xl tracking-tight text-zinc-900 sm:mt-0"
			Tag="h1"
		/>
		<div className="mt-3">
			<h2 className="sr-only">Reviews</h2>
			<ProductRating rating={rating} size="lg" />
		</div>
		<div className="mt-10">
			<h2 className="sr-only">Description</h2>
			<Prose content={description} className="prose-base prose-zinc mt-4" />
		</div>
		<div className="mt-6">{children}</div>
	</div>
);
