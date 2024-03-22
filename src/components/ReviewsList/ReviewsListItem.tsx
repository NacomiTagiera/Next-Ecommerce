import { type ReviewFragment } from "@/graphql/generated/graphql";
import { formatDate } from "@/lib/utils";

import { ProductRating } from "../UI/ProductRating";

type Props = {
	review: ReviewFragment;
};

export const ReviewsListItem = ({
	review: { name, rating, headline, content, createdAt },
}: Props) => (
	<li className="rounded-lg bg-white p-4 shadow-md">
		<div className="flex items-start justify-between">
			<div>
				<strong className="block font-medium text-zinc-900">{name}</strong>
				<time dateTime={String(createdAt)} className="text-sm text-zinc-500">
					{formatDate(createdAt)}
				</time>
			</div>
			<ProductRating rating={rating} hideRating />
		</div>
		<h4 className="mb-1 mt-4 font-semibold text-zinc-700 lg:text-lg">{headline}</h4>
		<p className="text-sm leading-loose text-zinc-500">{content}</p>
	</li>
);
