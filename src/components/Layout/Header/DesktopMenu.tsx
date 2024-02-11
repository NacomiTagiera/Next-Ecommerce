import { Popover as UiPopover } from "@headlessui/react";

import { type Route } from "next";

import { ActiveLink } from "@/components/UI/ActiveLink";
import { type CategoryWithImage } from "@/types";

import { NavImage } from "./NavImage";
import { Popover } from "./Popover";

type Props = {
	navigation: {
		groupings: {
			name: string;
			featured: CategoryWithImage[];
		}[];
		pages: {
			text: string;
			href: Route;
		}[];
	};
};

export const DesktopMenu = ({ navigation }: Props) => (
	<UiPopover.Group className="inset-x-0 bottom-0 px-4">
		<div className="flex h-full justify-center space-x-8">
			{navigation.pages.map((page) => (
				<ActiveLink
					key={page.text}
					href={page.href}
					className="flex items-center font-medium text-zinc-700 transition-colors duration-150 ease-in-out hover:text-wild-blue-yonder-600"
					activeClassName="text-black underline hover:text-black underline-offset-4"
					exact={page.text === "Home"}
				>
					{page.text}
				</ActiveLink>
			))}

			{navigation.groupings.map((grouping) => (
				<Popover key={grouping.name} name={grouping.name}>
					{grouping.featured.map((item) => (
						<NavImage
							key={item.slug}
							src={item.image?.url}
							width={280}
							height={280}
							name={item.name}
							slug={item.slug}
							grouping={grouping.name}
						/>
					))}
				</Popover>
			))}
		</div>
	</UiPopover.Group>
);
