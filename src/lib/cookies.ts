import { cookies } from "next/headers";

import "server-only"; // Make sure you can't import this on client

export const getCookie = (name: string) => cookies().get(name)?.value;

export const setCookie = (name: string, value: string, maxAge?: number) =>
	cookies().set(name, value, {
		httpOnly: true,
		sameSite: "strict",
		maxAge: maxAge || 60 * 60 * 24 * 30,
	});

export const deleteCookie = (name: string) => cookies().delete(name);
