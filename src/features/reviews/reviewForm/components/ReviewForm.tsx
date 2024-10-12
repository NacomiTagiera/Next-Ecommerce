"use client";

import { ActionButton } from "@/components/UI/ActionButton";
import { FormField } from "@/components/UI/FormField";
import { Notification } from "@/components/UI/Notification";

import { useReviewForm } from "../hooks/useReviewForm";

import { StarRatingInput } from "./StarRatingInput";

interface Props {
	productId: string;
}

export const ReviewForm = ({ productId }: Props) => {
	const {
		formState,
		formAction,
		formRef,
		rating,
		setRating,
		setShowNotification,
		showNotification,
	} = useReviewForm(productId);

	return (
		<>
			<Notification
				show={showNotification}
				message={formState.message}
				status={formState.issues ? "error" : "success"}
				onClose={() => {
					setShowNotification(false);
				}}
			/>
			<form ref={formRef} className="mt-8 space-y-8 lg:sticky lg:top-28" action={formAction}>
				<FormField
					name="headline"
					placeholder="Title"
					max={50}
					required
					variant="filled"
					issues={formState.issues?.headline}
				/>
				<FormField
					component="textarea"
					name="content"
					placeholder="Your thoughts..."
					maxLength={250}
					required
					variant="filled"
					issues={formState.issues?.content}
				/>
				<div>
					<span id="rating-label">Rating</span>
					<StarRatingInput value={rating} onChange={(value) => setRating(value)} />
				</div>
				<FormField
					name="name"
					placeholder="Preferred Name"
					autoComplete="name"
					max={50}
					required
					variant="filled"
					issues={formState.issues?.name}
				/>
				<FormField
					name="email"
					type="email"
					placeholder="you@example.com"
					autoComplete="email"
					required
					variant="filled"
					issues={formState.issues?.email}
				/>
				<ActionButton>Submit Review</ActionButton>
			</form>
		</>
	);
};
