import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getProductBySlug } from "@/api/products";
import { formatPrice } from "@/lib/utils";
import { RelatedProducts } from "@/components/Products/ProductDetails/RelatedProducts";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const product = await getProductBySlug(params.slug);

	return {
		title: product ? product.name : "Product not found",
		description: product?.description,
	};
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
	const product = await getProductBySlug(params.slug);

	if (!product) {
		throw notFound();
	}

	const categoriesSlugs = product.categories.map((category) => category.slug);

	return (
		<>
			<article>
				<div className="flex flex-col gap-4 md:flex-row">
					{product.images[0] && (
						<Image
							src={product.images[0].url}
							alt={product.name}
							width={320}
							height={320}
							className="aspect-square transition-transform hover:scale-105"
						/>
					)}
					<section>
						{product.categories.map((category) => (
							<h2
								key={category.slug}
								className="title-font text-sm uppercase tracking-widest text-gray-500"
							>
								{category.name}
							</h2>
						))}
						<h1 className="title-font mb-1 text-3xl font-medium text-gray-900">{product.name}</h1>
						<p className="border-gray-1 border-b-2 pb-5 leading-relaxed">{product.description}</p>
						<div className="mt-5 flex justify-between align-baseline">
							<p className="text-2xl font-medium text-gray-900">
								{formatPrice(product.price / 100)}
							</p>
							<button className="inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
								Add to cart
							</button>
						</div>
					</section>
				</div>
			</article>
			<RelatedProducts productSlug={product.slug} categoriesSlugs={categoriesSlugs} />
		</>
	);
}
