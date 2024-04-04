import { getCookie } from "@/lib/cookies";

import { CartCount } from "./CartCount";

export const CartCountFromCookies = () => {
	const cartCount = Number(getCookie("cartCount") || "0");

	return <CartCount initialCartCount={cartCount} />;
};
