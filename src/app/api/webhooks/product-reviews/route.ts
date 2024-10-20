import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

import { getProductByIdOrSlug } from "@/features/products/productDetails/api/fetchQueries";
import { getReviewsByProductId } from "@/features/reviews/reviewsList/api/fetchQueries";
import { ProductUpdateRatingDocument } from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

interface ProductData {
	data?: {
		product?: {
			id?: string;
		};
	};
}

export async function POST(request: NextRequest) {
	const { data } = (await request.json()) as unknown as ProductData;

	const productId = data?.product?.id;

	if (!productId) {
		return new Response("Product ID not found", { status: 400 });
	}

	const [reviews, product] = await Promise.all([
		getReviewsByProductId(productId),
		getProductByIdOrSlug({ id: productId }),
	]);
	let averageRating = 0;

	if (reviews && reviews.length > 0) {
		const totalRating = reviews.reduce((acc, review) => acc + (review.rating ?? 0), 0);
		averageRating = parseFloat((totalRating / reviews.length).toFixed(2));
	}

	try {
		await executeGraphql({
			query: ProductUpdateRatingDocument,
			variables: { productId, rating: averageRating },
		});

		revalidatePath(`/product/${product?.slug}`);
		revalidatePath("/");
		return new Response(`Rating updated: ${averageRating}`, { status: 200 });
	} catch (error) {
		return new Response("Failed to update rating", { status: 500 });
	}
}
