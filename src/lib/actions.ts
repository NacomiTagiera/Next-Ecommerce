"use server";

import { revalidateTag } from "next/cache";

import { createReview, publishReview } from "@/app/api/reviews";

import { reviewSchema } from "./validators";

export type FormState = {
	message: string;
	fields?: Record<string, string>;
	issues?: string[];
};

export const createReviewAction = async (productId: string, _prev: FormState, data: FormData) => {
	const formData = Object.fromEntries(data.entries());
	const { rating, ...rest } = formData;

	const parsed = reviewSchema.safeParse({
		rating: Number(rating),
		...rest,
	});

	if (!parsed.success) {
		const fields: Record<string, string> = {};
		for (const key of Object.keys(formData)) {
			fields[key] = formData[key]?.toString() || "";
		}

		return {
			message: "Invalid form data. Please check the fields and try again.",
			fields,
			issues: parsed.error.issues.map((issue) => issue.message),
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
