import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

type Props = {
	Icon: IconType;
	label: string;
	onClick: () => void;
	className?: string;
};

export const MobileMenuButton = ({ Icon, label, onClick, className }: Props) => (
	<button
		type="button"
		className={cn("-ml-2 p-2 text-zinc-700 hover:text-wild-blue-yonder-600", className)}
		onClick={onClick}
	>
		<span className="sr-only">{label}</span>
		<Icon className="h-6 w-6" aria-hidden />
	</button>
);
