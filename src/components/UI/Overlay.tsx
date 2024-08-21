"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

export const Overlay = () => {
	const router = useRouter();

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				router.back();
			}
		};

		document.addEventListener("keydown", onKeyDown);
		document.body.classList.add("overflow-hidden");

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	return (
		<div
			className="fixed inset-0 animate-fade-in bg-black/50 backdrop-blur-sm"
			role="dialog"
			aria-label="Close overlay"
			aria-hidden
			onClick={() => router.back()}
			data-testid="overlay"
		/>
	);
};
