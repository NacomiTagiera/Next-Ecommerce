import { type Route } from "next";

import { ActiveLink } from "@/components/UI/ActiveLink";

type Props = {
	header: string;
	items: {
		name: string;
		href: Route;
	}[];
};

export const FooterMenu = ({ header, items }: Props) => {
	return (
		<>
			<h4 className="font-semibold leading-6 text-black">{header}</h4>
			<ul className="mt-5 space-y-4">
				{items.map((item) => (
					<li key={item.href}>
						<ActiveLink
							href={`${item.href}`}
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
