import { Suspense } from "react";

import { CollectionsList } from "@/components/Storefront/CollectionsList";
import { Hero } from "@/components/Storefront/Hero";
import { Incentives } from "@/components/Storefront/Incentives";
import { Testimonials } from "@/components/Storefront/Testimonials";
import { TrendingProducts } from "@/components/Storefront/TrendingProducts";
import { CollectionsListSkeleton, TrendingProductsSkeleton } from "@/components/UI/Skeletons";

export default function Home() {
	return (
		<>
			<Hero />
			<Suspense fallback={<CollectionsListSkeleton />}>
				<CollectionsList />
			</Suspense>
			<Suspense fallback={<TrendingProductsSkeleton />}>
				<TrendingProducts />
			</Suspense>
			<Incentives />
			<Testimonials />
		</>
	);
}
