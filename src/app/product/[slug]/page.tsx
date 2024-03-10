import { Suspense } from "react";

import { getProductByIdOrSlug } from "@/app/api/products";
import { AddToBagButton } from "@/components/ProductDetails/AddToBagButton";
import { ProductImage } from "@/components/ProductDetails/ProductImage";
import { ProductInfo } from "@/components/ProductDetails/ProductInfo";
import { RelatedProducts } from "@/components/ProductDetails/RelatedProducts";
import { VariantSelector } from "@/components/ProductDetails/VariantSelector";
import { TrendingProductsSkeleton } from "@/components/UI/Skeletons";
import { type VariantsType } from "@/types";

type Props = {
	params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
	const product = await getProductByIdOrSlug({ slug: params.slug });
	const categoriesSlugs = product.categories.map((category) => category.slug);

	return (
		<section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<article className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
				<ProductImage product={product} />
				<ProductInfo product={product}>
					<form action="">
						<VariantSelector variants={product.variants as VariantsType} />
						<AddToBagButton />
					</form>
				</ProductInfo>
			</article>
			<Suspense fallback={<TrendingProductsSkeleton />}>
				<RelatedProducts productSlug={product.slug} categoriesSlugs={categoriesSlugs} />
			</Suspense>
		</section>
	);
}
