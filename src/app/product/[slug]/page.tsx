import { Suspense } from "react";

import { getProductByIdOrSlug } from "@/app/api/products";
import { AddToBagButton } from "@/components/ProductDetails/AddToBagButton";
import { ProductImage } from "@/components/ProductDetails/ProductImage";
import { ProductInfo } from "@/components/ProductDetails/ProductInfo";
import { RelatedProducts } from "@/components/ProductDetails/RelatedProducts";
import { VariantSelector } from "@/components/ProductDetails/VariantSelector";
import { ReviewForm } from "@/components/ReviewForm";
import { ReviewFormWrapper } from "@/components/ReviewForm/ReviewFormWrapper";
import { ReviewsList } from "@/components/ReviewsList";
import { ReviewsListSkeleton, TrendingProductsSkeleton } from "@/components/UI/Skeletons";
import { type VariantsType } from "@/types";

type Props = {
	params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
	const product = await getProductByIdOrSlug({ slug: params.slug });
	const categoriesSlugs = product.categories.map((category) => category.slug);

	return (
		<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
			<div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-16">
				<ReviewFormWrapper productRating={product.rating}>
					<ReviewForm productId={product.id} />
				</ReviewFormWrapper>
				<Suspense fallback={<ReviewsListSkeleton />}>
					<ReviewsList productId={product.id} />
				</Suspense>
			</div>
		</div>
	);
}
