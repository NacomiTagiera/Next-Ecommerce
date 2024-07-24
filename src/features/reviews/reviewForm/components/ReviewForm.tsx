"use client";

import { ActionButton } from "@/components/UI/ActionButton";
import { Notification } from "@/components/UI/Notification";

import { ReviewFormField } from "../../reviewForm/components/ReviewFormField";
import { StarRatingInput } from "../../reviewForm/components/StarRatingInput";
import { useReviewForm } from "../hooks/useReviewForm";

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
			<form ref={formRef} className="mt-8 space-y-8" action={formAction}>
				<ReviewFormField
					name="headline"
					placeholder="Title"
					max={50}
					required
					issues={formState.issues?.headline}
				/>
				<ReviewFormField
					component="textarea"
					name="content"
					placeholder="Your thoughts..."
					maxLength={250}
					required
					issues={formState.issues?.content}
				/>
				<div>
					<span id="rating-label">Rating</span>
					<StarRatingInput value={rating} onChange={(value) => setRating(value)} />
				</div>
				<ReviewFormField
					name="name"
					placeholder="Preferred Name"
					autoComplete="name"
					max={50}
					required
					issues={formState.issues?.name}
				/>
				<ReviewFormField
					name="email"
					type="email"
					placeholder="you@example.com"
					autoComplete="email"
					required
					issues={formState.issues?.email}
				/>
				<ActionButton>Submit Review</ActionButton>
			</form>
		</>
	);
};
