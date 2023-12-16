import { type Route } from "next";

import { ActiveLink } from "@/components/UI/ActiveLink";

type Props = {
	header: string;
	items: {
		slug: string;
		name: string;
	}[];
};

export const FooterMenu = ({ header, items }: Props) => {
	const linkPrefix =
		header === "Categories" || header === "Collections" ? `/${header.toLowerCase()}` : "";

	return (
		<>
			<h5 className="font-semibold leading-6 text-black">{header}</h5>
			<ul className="mt-5 space-y-4">
				{items.map((item) => (
					<li key={item.slug}>
						<ActiveLink
							href={`${linkPrefix}/${item.slug}` as Route}
							className="hover:text-black hover:underline hover:underline-offset-4"
							activeClassName="text-black"
							exact={false}
						>
							{item.name}
						</ActiveLink>
					</li>
				))}
			</ul>
		</>
	);
};
