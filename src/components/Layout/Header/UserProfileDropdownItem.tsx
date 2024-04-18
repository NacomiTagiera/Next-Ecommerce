import { type IconType } from "react-icons";
import { Menu } from "@headlessui/react";

import Link from "next/link";

type Props = {
	href?: string | undefined;
	onClick?: () => void;
	icon: IconType;
	children: React.ReactNode;
};

export const UserProfileDropdownItem = ({ href, onClick, icon: Icon, children }: Props) => {
	if (href) {
		return (
			<Menu.Item>
				<Link
					href={href}
					className="flex items-center px-4 py-2 text-sm text-zinc-700 hover:bg-twilight-50"
				>
					<Icon className="me-2 size-5 text-zinc-500" aria-hidden />
					{children}
				</Link>
			</Menu.Item>
		);
	}

	return (
		<Menu.Item>
			<button
				onClick={onClick}
				className="flex w-full items-center px-4 py-2 text-left text-sm text-zinc-700 hover:bg-twilight-50"
			>
				<Icon className="me-2 size-5 text-zinc-500" aria-hidden />
				{children}
			</button>
		</Menu.Item>
	);
};
