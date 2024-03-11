import type { IconType } from "react-icons";

type Props = {
	href: string;
	name: string;
	Icon: IconType;
};

export const FooterSocialLink = ({ href, name, Icon }: Props) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="hover:animate-jelly">
			<span className="sr-only">{name}</span>
			<Icon aria-hidden className="size-6" />
		</a>
	);
};
