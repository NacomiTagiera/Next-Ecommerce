import { getProductByIdOrSlug } from "@/app/api/products";
import { AddToCartButton } from "@/components/ProductDetails/AddToCartButton";
import { ProductImage } from "@/components/ProductDetails/ProductImage";
import { ProductInfo } from "@/components/ProductDetails/ProductInfo";
// import { RelatedProducts } from "@/components/ProductDetails/RelatedProducts";
import { VariantSelector } from "@/components/ProductDetails/VariantSelector";
import { type VariantsType } from "@/types";

type Props = {
	params: { slug: string };
};

export default async function ProductPage({ params }: Props) {
	const product = await getProductByIdOrSlug({ slug: params.slug });

	return (
		<section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<article className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
				<ProductImage product={product} />
				<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
					<ProductInfo product={product}>
						<form action="">
							<VariantSelector variants={product.variants as VariantsType} />
							<AddToCartButton />
						</form>
					</ProductInfo>
				</div>
			</article>
			{/* <RelatedProducts productSlug={product.slug} categoriesSlugs={categoriesSlugs} /> */}
		</section>
	);
}
