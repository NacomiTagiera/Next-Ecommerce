import { type Route } from "next";

import { ActiveLink } from "../UI/ActiveLink";

type Props<T extends string> = {
	numberOfPages: number;
	baseUrl: Route<T>;
	searchParams: { [key: string]: string | string[] | undefined };
};

export const Pagination = <T extends string>({
	numberOfPages,
	baseUrl,
	searchParams,
}: Props<T>) => {
	const pageNumbers = [...Array(numberOfPages).keys()].map((index) => index + 1);

	return (
		<nav
			className="mx-auto mt-10 flex items-center justify-between border-t border-gray-300 px-4 sm:px-0 lg:max-w-sm"
			role="navigation"
			aria-label="Pagination Navigation"
		>
			<ul className="mx-auto -mt-px flex">
				{pageNumbers.map((pageNo) => (
					<li key={pageNo}>
						<ActiveLink
							href={{
								pathname: `${baseUrl}/${pageNo.toString()}`,
								query: {
									...searchParams,
								},
							}}
							className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-400 hover:text-gray-700"
							activeClassName="border-skyfall-500 text-skyfall-500 hover:border-skyfall-500 hover:text-skyfall-500"
						>
							{pageNo}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
