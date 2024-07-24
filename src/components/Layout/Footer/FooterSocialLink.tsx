import { type IconType } from "react-icons";

interface Props {
	href: string;
	name: string;
	icon: IconType;
}

export const FooterSocialLink = ({ href, name, icon: Icon }: Props) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="hover:animate-jelly">
			<span className="sr-only">{name}</span>
			<Icon aria-hidden className="size-6" />
		</a>
	);
};
