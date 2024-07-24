import { z } from "zod";

export const reviewSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, {
			message: "Name is required",
		})
		.max(50, {
			message: "Name cannot exceed 50 characters",
		}),
	email: z.string().trim().email({
		message: "Invalid email address",
	}),
	headline: z
		.string()
		.trim()
		.min(1, {
			message: "Headline is required",
		})
		.max(50, {
			message: "Headline cannot exceed 50 characters",
		}),
	content: z
		.string()
		.trim()
		.min(1, {
			message: "Content is required",
		})
		.max(250, {
			message: "Content cannot exceed 250 characters",
		}),
	rating: z.number().int().min(1).max(5),
});
