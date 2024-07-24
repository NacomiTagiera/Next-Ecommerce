import { ReviewsGetByProductIdDocument } from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getReviewsByProductId = async (productId: string) => {
	const { reviews } = await executeGraphql({
		query: ReviewsGetByProductIdDocument,
		variables: { productId },
		next: {
			tags: ["reviews"],
		},
	});

	return reviews;
};
