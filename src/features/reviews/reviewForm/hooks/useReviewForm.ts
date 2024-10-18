import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

import { useRouter } from "next/navigation";

import { createReviewAction } from "../api/actions";

export const useReviewForm = (productId: string) => {
	const createReviewWithId = createReviewAction.bind(null, productId);
	const [formState, formAction] = useFormState(createReviewWithId, {
		message: "",
	});
	const router = useRouter();

	const [rating, setRating] = useState(5);
	const [showNotification, setShowNotification] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (formState.message) {
			setShowNotification(true);

			if (!formState.issues) {
				formRef.current?.reset();
				setRating(5);
				router.refresh();
			}
		}
	}, [formState, router]);

	return {
		formState,
		formAction,
		formRef,
		rating,
		setRating,
		showNotification,
		setShowNotification,
	};
};
