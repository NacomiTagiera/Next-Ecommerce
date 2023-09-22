import { ActiveLink } from "../atoms/ActiveLink";
import { navLinks } from "@/lib/constants";

export const Navbar = () => {
	return (
		<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
			<div className="hidden flex-shrink-0 items-center lg:flex"></div>
			<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
				{navLinks.map(({ text, href, exact }) => (
					<li key={href} className="first:pl-4 last:pr-4 lg:px-0">
						<ActiveLink
							href={href}
							exact={exact}
							className="flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium hover:border-gray-300 hover:text-black"
							activeClassName="border-[#D28B57]"
						>
							{text}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
