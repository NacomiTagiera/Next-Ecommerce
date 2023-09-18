import { ActiveLink } from "../atoms/ActiveLink";

type Props = {
	currentPage: number;
	className?: string;
};

export const Pagination = ({ currentPage, className }: Props) => {
	const pageNumbers = Array.from({ length: 10 }, (_, i) => currentPage - 5 + i);

	return (
		<ol
			className={`flex justify-center gap-1 text-xs font-medium ${className}`}
			aria-label="Pagination"
		>
			{currentPage > 1 && (
				<li>
					<ActiveLink
						href={`/products/${currentPage - 1}`}
						className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
					>
						<span className="sr-only">Previous Page</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-3 w-3"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</ActiveLink>
				</li>
			)}
			{pageNumbers.map(
				(pageNumber) =>
					pageNumber > 0 && (
						<li key={pageNumber}>
							<ActiveLink
								href={`/products/${pageNumber}`}
								className="block h-8 w-8 rounded border border-gray-100 text-center leading-8 text-gray-900"
								activeClassName="border-blue-600 bg-blue-600 text-white"
							>
								{pageNumber}
							</ActiveLink>
						</li>
					),
			)}
			<li>
				<ActiveLink
					href={`/products/${currentPage + 1}`}
					className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900"
				>
					<span className="sr-only">Next Page</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3 w-3"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clipRule="evenodd"
						/>
					</svg>
				</ActiveLink>
			</li>
		</ol>
	);
};
