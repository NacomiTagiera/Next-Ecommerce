import {
	ReviewCreateDocument,
	type ReviewFragment,
	ReviewPublishDocument,
} from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

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
