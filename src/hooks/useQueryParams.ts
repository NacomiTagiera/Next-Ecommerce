import { type Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { createUrl } from "@/lib/utils";

export const useQueryParams = <T>() => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const urlSearchParams = new URLSearchParams(searchParams?.toString());

	const setQueryParams = (params: Partial<T>) => {
		Object.entries(params).forEach(([key, value]) => {
			if (!value) {
				urlSearchParams.delete(key);
			} else {
				urlSearchParams.set(key, String(value));
			}
		});

		const newUrl = createUrl(pathname, urlSearchParams);

		router.replace(newUrl as Route, { scroll: false });
	};

	return { queryParams: searchParams, setQueryParams };
};
