"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

import { createReviewAction } from "@/lib/actions";

import { Notification } from "../UI/Notification";

import { ReviewFormField } from "./ReviewFormField";
import { ReviewFormSubmitButton } from "./ReviewFormSubmitButton";
import { StarRatingInput } from "./StarRatingInput";

type Props = {
	productId: string;
};

export const ReviewForm = ({ productId }: Props) => {
	const createReviewWithId = createReviewAction.bind(null, productId);
	const [state, formAction] = useFormState(createReviewWithId, {
		message: "",
	});

	const [rating, setRating] = useState(5);
	const [showNotification, setShowNotification] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (state.message) {
			setShowNotification(true);

			if (!state.issues) {
				formRef.current?.reset();
				setRating(5);
			}
		}
	}, [state]);

	return (
		<>
			<Notification
				show={showNotification}
				message={state.message}
				status={state.issues ? "error" : "success"}
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
					issues={state.issues?.headline}
				/>
				<ReviewFormField
					component="textarea"
					name="content"
					placeholder="Your thoughts..."
					maxLength={250}
					required
					issues={state.issues?.content}
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
					issues={state.issues?.name}
				/>
				<ReviewFormField
					name="email"
					type="email"
					placeholder="you@example.com"
					autoComplete="email"
					required
					issues={state.issues?.email}
				/>
				<ReviewFormSubmitButton />
			</form>
		</>
	);
};
