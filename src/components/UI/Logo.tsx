import NextImage from "next/image";

import logo from "../../../public/images/logo.png";
import logoNoText from "../../../public/images/logo-no-text.png";

type Props = {
	includeText?: boolean;
	className?: string;
	priority?: boolean;
};

export const Logo = ({ includeText, className, priority }: Props) => {
	const src = includeText ? logo : logoNoText;

	return <NextImage src={src} alt="Next Sports Logo" priority={priority} className={className} />;
};
