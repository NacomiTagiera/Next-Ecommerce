import { executeGraphql } from "@/app/api/graphqlApi";
import {
	ReviewCreateDocument,
	type ReviewFragment,
	ReviewPublishDocument,
	ReviewsGetByProductIdDocument,
} from "@/graphql/generated/graphql";

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

export const createReview = async (
	productId: string,
	review: Omit<ReviewFragment, "id" | "createdAt">,
) => {
	const { createReview } = await executeGraphql({
		query: ReviewCreateDocument,
		variables: { productId, ...review },
	});

	return createReview?.id;
};

export const publishReview = async (reviewId?: string) => {
	if (!reviewId) return;

	await executeGraphql({
		query: ReviewPublishDocument,
		variables: { id: reviewId },
	});
};
