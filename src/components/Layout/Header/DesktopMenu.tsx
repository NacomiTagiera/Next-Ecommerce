import { Popover as UiPopover } from "@headlessui/react";

import { type Route } from "next";

import { ActiveLink } from "@/components/UI/ActiveLink";
import { ImageLink } from "@/components/UI/ImageLink";
import { type CategoryWithImage } from "@/types";

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
						<ImageLink
							key={item.slug}
							src={item.image?.url}
							alt={item.name}
							width={280}
							height={280}
							href={`/${grouping.name.toLowerCase()}/${item.slug}`}
						>
							<h3 className="mt-6 block text-sm text-zinc-800">{item.name}</h3>
							<p aria-hidden className="mt-1 text-sm text-zinc-500">
								Shop now
							</p>
						</ImageLink>
					))}
				</Popover>
			))}
		</div>
	</UiPopover.Group>
);
