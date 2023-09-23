import { NavbarLink } from "./NavbarLink";
import { navLinks } from "@/lib/constants";

export const Navbar = () => {
	return (
		<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
			<div className="hidden flex-shrink-0 items-center lg:flex"></div>
			<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
				{navLinks.map((link) => (
					<NavbarLink key={link.href} {...link} />
				))}
			</ul>
		</nav>
	);
};
