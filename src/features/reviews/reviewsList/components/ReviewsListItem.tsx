import { ProductRating } from "@/components/UI/ProductRating";
import { type ReviewFragment } from "@/graphql/generated/graphql";
import { formatDate } from "@/lib/utils";

interface Props {
	review: ReviewFragment;
}

export const ReviewsListItem = ({
	review: { name, email, rating, headline, content, createdAt },
}: Props) => (
	<article className="rounded-lg bg-white p-4 shadow-md">
		<header className="flex items-start justify-between">
			<div>
				<address className="not-italic sm:flex sm:gap-x-1.5">
					<strong className="block font-medium">{name}</strong>
					<a href={`mailto:${email}`} className="text-sm text-zinc-600">
						{email}
					</a>
				</address>
				<time dateTime={formatDate(createdAt)} className="text-sm text-zinc-500">
					{formatDate(createdAt)}
				</time>
			</div>
			<ProductRating rating={rating} hideRating />
		</header>
		<h3 className="mb-1 mt-4 font-semibold text-zinc-700 lg:text-lg">{headline}</h3>
		<p className="text-sm leading-loose text-zinc-500">{content}</p>
	</article>
);
