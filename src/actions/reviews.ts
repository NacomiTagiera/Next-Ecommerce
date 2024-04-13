"use server";

import { revalidateTag } from "next/cache";

import { createReview, publishReview } from "@/app/api/reviews";
import { reviewSchema } from "@/lib/validators";

type FormState = {
	message: string;
	issues?: Record<string, string[]>;
};

export const createReviewAction = async (productId: string, _prev: FormState, data: FormData) => {
	const formData = Object.fromEntries(data.entries());
	const { rating, ...rest } = formData;

	const parsed = reviewSchema.safeParse({
		rating: Number(rating),
		...rest,
	});

	if (!parsed.success) {
		return {
			message: "Invalid form data. Please check the fields and try again.",
			issues: parsed.error.flatten().fieldErrors,
		};
	}

	try {
		const newReviewId = await createReview(productId, parsed.data);
		await publishReview(newReviewId);

		revalidateTag("reviews");

		return {
			message: "Review submitted successfully. Thank you!",
		};
	} catch (error) {
		return {
			message: "Failed to submit review. Please try again later.",
		};
	}
};
