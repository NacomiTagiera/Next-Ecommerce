import { getCollectionsList } from "@/features/collections/api/fetchQueries";

import { BlurredImage } from "../UI/BlurredImage";
import { ImageLink } from "../UI/ImageLink";
import { SectionHeader } from "../UI/SectionHeader";

export const CollectionsList = async () => {
	const collections = await getCollectionsList({ includeImg: true, includeDescription: true });

	return (
		<section aria-labelledby="collections-heading" className="bg-white">
			<div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<SectionHeader
					id="collections-heading"
					title="Shop by Collection"
					description="Each season, we collaborate with world-class designers to create a collection inspired by the natural world."
				/>
				<ul className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4">
					{collections.map((collection) => (
						<li key={collection.slug}>
							<ImageLink
								src={collection.image?.url}
								alt={`${collection.name} Collection`}
								width={528}
								height={528}
								href={`/collections/${collection.slug}`}
								Component={BlurredImage}
							>
								<h3 className="mt-4 text-base font-semibold">{collection.name}</h3>
								<p className="mt-2 text-sm text-zinc-700">{collection.description}</p>
							</ImageLink>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
