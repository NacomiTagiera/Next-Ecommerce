"use client";

import { startTransition, useEffect } from "react";

import { useRouter } from "next/navigation";

import { clearCartCookie } from "../api/actions";

export const ClearCartCookie = () => {
	const router = useRouter();

	useEffect(() => {
		startTransition(async () => {
			await clearCartCookie();
			router.refresh();
		});
	}, [router]);

	return null;
};
