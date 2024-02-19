import type { IconType } from "react-icons";

type Props = {
	Icon: IconType;
	label: string;
	onClick: () => void;
	className?: string;
};

export const MobileMenuButton = ({ Icon, label, onClick, className }: Props) => (
	<button type="button" className={className} onClick={onClick}>
		<span className="sr-only">{label}</span>
		<Icon className="h-5 w-5 text-zinc-700 transition-colors hover:text-skyfall-500" aria-hidden />
	</button>
);
