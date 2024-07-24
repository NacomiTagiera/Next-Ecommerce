import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { createUrl } from "../utils";

export const useVariantSelector = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleVariantChange = (variantName: string, value: string) => {
		const variantSearchParams = new URLSearchParams(searchParams.toString());

		variantSearchParams.set(variantName, value);
		const variantUrl = createUrl(pathname, variantSearchParams);

		router.replace(variantUrl, {
			scroll: false,
		});
	};

	return { searchParams, handleVariantChange };
};
