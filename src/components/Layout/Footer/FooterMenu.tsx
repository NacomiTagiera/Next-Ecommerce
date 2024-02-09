import { type Route } from "next";

import { ActiveLink } from "@/components/UI/ActiveLink";

type Props = {
	header: string;
	items: {
		name: string;
		href: string;
	}[];
};

export const FooterMenu = ({ header, items }: Props) => {
	return (
		<>
			<h5 className="font-semibold leading-6 text-black">{header}</h5>
			<ul className="mt-5 space-y-4">
				{items.map((item) => (
					<li key={item.href}>
						<ActiveLink
							href={`${item.href}` as Route}
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
