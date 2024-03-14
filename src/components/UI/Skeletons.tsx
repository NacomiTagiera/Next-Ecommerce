import { PRODUCTS_PER_PAGE } from "@/lib/constants";

const CollectionsListItemSkeleton = () => (
	<div>
		<div className="aspect-h-1 aspect-w-1 animate-pulse rounded-md bg-gray-200"></div>
		<div className="mt-4 h-4 w-1/2 rounded bg-gray-200"></div>
		<div className="mt-2 h-3 rounded bg-gray-200"></div>
		<div className="mt-2 h-3 rounded bg-gray-200"></div>
	</div>
);

export const CollectionsListSkeleton = () => (
	<div className="bg-white">
		<div
			role="status"
			className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
		>
			<div className="mb-16 animate-pulse">
				<div className="h-6 w-1/2 rounded bg-gray-200"></div>
				<div className="mt-3 h-4 w-2/3 rounded bg-gray-200"></div>
			</div>
			<div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-4 lg:grid-cols-4">
				<CollectionsListItemSkeleton />
				<CollectionsListItemSkeleton />
				<CollectionsListItemSkeleton />
				<CollectionsListItemSkeleton />
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	</div>
);

const ProductListItemSkeleton = () => (
	<div className="rounded-xl bg-white p-2">
		<div className="aspect-h-1 aspect-w-1 animate-pulse rounded-lg bg-gray-200"></div>
		<div className="mt-2 space-y-4 px-1">
			<div>
				<div className="h-4 w-1/2 rounded bg-gray-200"></div>
				<div className="mt-2 h-3 w-1/3 rounded bg-gray-200"></div>
			</div>
			<div className="flex items-center justify-between">
				<div className="h-4 w-1/4 rounded bg-gray-200"></div>
				<div className="h-4 w-2/5 rounded bg-gray-200"></div>
			</div>
		</div>
	</div>
);

export const ProductListSkeleton = ({ count }: { count?: number }) => (
	<div className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
		{Array(count || PRODUCTS_PER_PAGE)
			.fill(null)
			.map((_, index) => (
				<ProductListItemSkeleton key={index} />
			))}
	</div>
);

export const TrendingProductsSkeleton = () => (
	<div role="status" className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
		<div className="mb-12 h-6 w-1/2 animate-pulse rounded bg-gray-200"></div>
		<ProductListSkeleton count={4} />
		<span className="sr-only">Loading...</span>
	</div>
);

const ReviewsListItemSkeleton = () => (
	<div className="rounded-lg bg-white p-4 shadow-md">
		<div className="flex items-start justify-between">
			<div className="w-full">
				<div className="h-4 w-1/4 rounded bg-gray-200"></div>
				<div className="mt-2 h-3 w-1/6 rounded bg-gray-200"></div>
			</div>
			<div className="h-4 w-1/6 rounded bg-gray-200"></div>
		</div>
		<div className="mt-8 h-4 w-1/4 rounded bg-gray-200"></div>
		<div className="mt-6 h-3 rounded bg-gray-200"></div>
		<div className="mt-4 h-3 rounded bg-gray-200"></div>
	</div>
);

export const ReviewsListSkeleton = () => (
	<div role="status" className="mt-16 animate-pulse lg:col-span-7 lg:col-start-6 lg:mt-0">
		<div className="mb-10 h-7 w-1/2 animate-pulse rounded bg-gray-200"></div>
		<ul className="space-y-10">
			<ReviewsListItemSkeleton />
			<ReviewsListItemSkeleton />
			<ReviewsListItemSkeleton />
		</ul>
		<span className="sr-only">Loading...</span>
	</div>
);
