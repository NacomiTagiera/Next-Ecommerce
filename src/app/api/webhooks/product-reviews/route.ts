import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

import { getProductByIdOrSlug } from "@/features/products/productDetails/api/fetchQueries";
import { getReviewsByProductId } from "@/features/reviews/reviewsList/api/fetchQueries";
import { ProductUpdateRatingDocument } from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export async function POST(request: NextRequest): Promise<Response> {
	const { data: { product: { id: productId } = {} } = {} } = (await request.json()) as {
		data: { product: { id: string } };
	};
	if (!productId) {
		return new Response("Product ID not found", { status: 400 });
	}

	const reviews = await getReviewsByProductId(productId);
	const product = await getProductByIdOrSlug({ id: productId });
	let averageRating = 0;

	if (reviews && reviews.length > 0) {
		const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
		averageRating = parseFloat((totalRating / reviews.length).toFixed(2));
	}

	try {
		await executeGraphql({
			query: ProductUpdateRatingDocument,
			variables: { productId, rating: averageRating },
		});

		revalidatePath(`/product/${product?.slug}`);
		revalidatePath("/");
		return new Response("Rating updated", { status: 200 });
	} catch (error) {
		return new Response("Failed to update rating", { status: 500 });
	}
}
