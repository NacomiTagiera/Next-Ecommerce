import { ProductListSkeleton } from "@/components/UI/Skeletons";

export default function LoadingProductBrowserPage() {
	return (
		<div role="status">
			<div className="animate-pulse border-b border-zinc-300 pb-10 pt-24">
				<div className="h-6 w-1/3 rounded bg-gray-200"></div>
				<div className="mt-3 h-4 w-1/2 rounded bg-gray-200"></div>
			</div>
			<div className="pb-24 pt-10">
				<ProductListSkeleton />
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
