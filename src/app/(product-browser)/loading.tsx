import { ProductListSkeleton } from "@/components/UI/Skeletons";

export default function LoadingProductBrowserPage() {
	return (
		<div role="status">
			<div className="animate-pulse border-b border-zinc-300 pb-10 pt-24">
				<div className="mx-auto h-6 w-1/3 rounded bg-gray-200"></div>
				<div className="mx-auto mt-3 h-4 w-1/2 rounded bg-gray-200"></div>
				<div className="mx-auto mt-1 h-4 w-1/3 rounded bg-gray-200"></div>
				<div className="mx-auto mt-1 h-4 w-1/4 rounded bg-gray-200"></div>
			</div>
			<div className="flex items-center justify-between pt-6">
				<div className="w-13 h-6 rounded bg-gray-200"></div>
				<div className="w-13 h-6 rounded bg-gray-200"></div>
			</div>
			<div className="mt-8 pb-24">
				<ProductListSkeleton />
			</div>
			<div className="mt-8 flex justify-center">
				<div className="h-9 max-w-xs rounded bg-gray-200"></div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
