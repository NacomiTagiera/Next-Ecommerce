import { CollectionsList } from "@/components/Storefront/CollectionsList";
import { Hero } from "@/components/Storefront/Hero";
import { Incentives } from "@/components/Storefront/Incentives";
import { Testimonials } from "@/components/Storefront/Testimonials";
import { TrendingProducts } from "@/components/Storefront/TrendingProducts";

export default function Home() {
	return (
		<>
			<Hero />
			<CollectionsList />
			<TrendingProducts />
			<Incentives />
			<Testimonials />
		</>
	);
}
