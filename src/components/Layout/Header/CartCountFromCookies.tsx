import { cookies } from "next/headers";

import { CartCount } from "./CartCount";

export const CartCountFromCookies = () => {
	const cartCount = Number(cookies().get("cartCount")?.value || "0");

	return <CartCount initialCartCount={cartCount} />;
};
