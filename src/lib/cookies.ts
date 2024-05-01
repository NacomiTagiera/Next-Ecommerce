import { cookies } from "next/headers";

export const getCookie = (name: string) => cookies().get(name)?.value;

export const setCookie = (name: string, value: string, maxAge?: number) =>
	cookies().set(name, value, {
		httpOnly: true,
		sameSite: "lax",
		maxAge: maxAge || 60 * 60 * 24 * 30,
	});

export const deleteCookie = (name: string) => cookies().delete(name);
