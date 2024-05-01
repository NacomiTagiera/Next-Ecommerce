import { revalidatePath } from "next/cache";
import { type NextRequest } from "next/server";

import { executeGraphql } from "@/app/api/graphqlApi";
import { getReviewsByProductId } from "@/app/api/reviews";
import { ProductUpdateRatingDocument } from "@/graphql/generated/graphql";

import { getProductByIdOrSlug } from "../../products";

export async function POST(request: NextRequest): Promise<Response> {
	const { data: { product: { id: productId } = {} } = {} } = (await request.json()) as {
		data: { product: { id: string } };
	};
	if (!productId) {
		return new Response("Product ID not found", { status: 400 });
	}

	const reviews = await getReviewsByProductId(productId);
	const { slug } = await getProductByIdOrSlug({ id: productId });
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

		revalidatePath(`/product/${slug}`);
		revalidatePath("/");
		return new Response("Rating updated", { status: 200 });
	} catch (error) {
		return new Response("Failed to update rating", { status: 500 });
	}
}
