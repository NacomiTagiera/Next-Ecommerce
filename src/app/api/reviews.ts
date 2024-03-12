import { executeGraphql } from "@/app/api/graphqlApi";
import { ReviewsGetByProductIdDocument } from "@/graphql/generated/graphql";

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
