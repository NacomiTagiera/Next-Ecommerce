import Link from "next/link";

import { type OrderFragment } from "@/graphql/generated/graphql";
import { formatPrice } from "@/lib/utils";

import { BlurredImage } from "../UI/BlurredImage";

type Props = {
	orderItem: OrderFragment["orderItems"][0];
	imgPriority?: boolean;
};

export const OrderItemProduct = ({ orderItem, imgPriority }: Props) => {
	if (!orderItem || !orderItem.product) return null;
	const { quantity, product } = orderItem;
	const productPrice = formatPrice(product.price / 100);

	return (
		<tr className="hover:bg-zinc-100">
			<td className="py-6 pl-2 pr-8 sm:pl-4">
				<div className="flex items-center">
					<BlurredImage
						src={product.images[0]?.url || ""}
						alt={product.name}
						priority={imgPriority}
						width={64}
						height={64}
						className="mr-6 size-16 rounded object-cover object-center"
					/>
					<div>
						<h3 className="text-left font-semibold">{product.name}</h3>
						<div className="mt-1 text-left sm:hidden">
							{quantity} × <span className="font-medium">{productPrice}</span>
						</div>
					</div>
				</div>
			</td>
			<td className="hidden py-6 pr-8 sm:table-cell">{productPrice}</td>
			<td className="hidden py-6 pr-8 sm:table-cell">{quantity}</td>
			<td className="whitespace-nowrap py-6 pr-2 text-right font-medium sm:pr-4">
				<Link href={`/product/${product.slug}`} className="text-skyfall-600">
					View<span className="hidden lg:inline"> Product</span>
					<span className="sr-only">, {product.name}</span>
				</Link>
			</td>
		</tr>
	);
};
