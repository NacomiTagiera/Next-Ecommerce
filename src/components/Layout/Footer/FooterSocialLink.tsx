import React from "react";
import type { LucideIcon } from "lucide-react";

type Props = {
	href: string;
	name: string;
	Icon: LucideIcon;
};

export const FooterSocialLink = ({ href, name, Icon }: Props) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="hover:animate-jelly">
			<span className="sr-only">{name}</span>
			<Icon aria-hidden className="h-6 w-6" />
		</a>
	);
};
