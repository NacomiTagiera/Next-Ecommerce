"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

export const Overlay = () => {
	const router = useRouter();

	useEffect(() => {
		document.body.classList.add("overflow-hidden");
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, []);

	return (
		<div
			className="fixed inset-0 animate-fade-in bg-black/50 backdrop-blur-sm"
			aria-hidden
			onClick={() => router.back()}
		/>
	);
};
