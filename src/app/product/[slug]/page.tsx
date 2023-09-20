import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct } from "@/api/products";
import { formatPrice } from "@/utils";
import { CustomImage } from "@/ui/atoms/CustomImage";

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products
// 		.map((product) => {
// 			return {
// 				productId: product.id,
// 			};
// 		})
// 		.slice(0, 10);
// };

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const product = await getProduct(params.slug);

	return {
		title: product ? product.name : "Product not found",
		description: product ? product.description : "Product not found",
	};
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
	const product = await getProduct(params.slug);

	if (!product) {
		throw notFound();
	}

	return (
		<article>
			<div className="flex flex-col gap-4 md:flex-row">
				{product.images[0] && (
					<CustomImage
						src={product.images[0]?.url}
						alt={product.name}
						width={320}
						height={320}
						className="aspect-square transition-transform hover:scale-105"
					/>
				)}
				<section>
					<h2 className="title-font text-sm uppercase tracking-widest text-gray-500">
						{product.categories[0]?.name}
					</h2>
					<h1 className="title-font mb-1 text-3xl font-medium text-gray-900">{product.name}</h1>
					<p className="border-gray-1 border-b-2 pb-5 leading-relaxed">{product.description}</p>
					<div className="mt-5 flex justify-between align-baseline">
						<p className="text-2xl font-medium text-gray-900">{formatPrice(product.price / 100)}</p>
						<button className="inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
							Add to cart
						</button>
					</div>
				</section>
			</div>
		</article>
	);
}
