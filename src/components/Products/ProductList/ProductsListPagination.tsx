import { ActiveLink } from "../../Shared/ActiveLink";

export const ProductsListPagination = ({ numberOfPages }: { numberOfPages: number }) => {
	const pageNumbers = [...Array(numberOfPages).keys()].map((index) => index + 1);

	return (
		<nav
			className="mt-auto flex items-center justify-center border-t border-slate-200 px-4"
			role="navigation"
			aria-label="Pagination Navigation"
		>
			<ul className="-mt-px flex">
				{pageNumbers.map((pageNo) => (
					<li key={pageNo}>
						<ActiveLink
							href={`/products/${pageNo.toString()}`}
							className="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
							activeClassName="border-pumpkin text-pumpkin-600"
						>
							{pageNo}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
