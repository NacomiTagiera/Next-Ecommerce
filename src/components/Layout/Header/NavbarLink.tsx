import { type Route } from "next";

import { ActiveLink } from "@/components/UI/ActiveLink";

export const NavbarLink = ({
	href,
	text,
	exact,
}: {
	href: Route;
	text: string;
	exact?: boolean;
}) => {
	return (
		<li className="first:pl-4 last:pr-4 lg:px-0">
			<ActiveLink
				href={href}
				exact={exact}
				className="flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium hover:border-gray-300 hover:text-black"
				activeClassName="border-[#D28B57]"
			>
				{text}
			</ActiveLink>
		</li>
	);
};
