import { Fragment, Suspense } from "react";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";

import type { Route } from "next";

import { ActiveLink } from "@/components/UI/ActiveLink";
import { ImageLink } from "@/components/UI/ImageLink";
import { type CategoryWithImage } from "@/types";

import { Dialog } from "./Dialog";
import { SearchInput } from "./SearchInput";
import { TabList } from "./TabList";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
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
}

export const MobileMenu = ({ open, setOpen, navigation }: Props) => (
	<Dialog open={open} onClose={() => setOpen(false)}>
		<Suspense>
			<SearchInput id="mobile-search" className="mx-auto block w-72 pt-3 lg:hidden" />
		</Suspense>
		<TabGroup as="div" className="mt-2">
			<TabList items={navigation.groupings} />
			<TabPanels as={Fragment}>
				{navigation.groupings.map((grouping) => (
					<TabPanel key={grouping.name} className="space-y-12 px-4 py-6">
						<div className="grid grid-cols-2 gap-x-4 gap-y-10">
							{grouping.featured.map((item) => (
								<ImageLink
									key={item.slug}
									src={item.image?.url}
									alt={item.name}
									width={136}
									height={136}
									href={`/${grouping.name.toLowerCase()}/${item.slug}`}
								>
									<h3 className="mt-6 block text-sm font-medium text-zinc-800">{item.name}</h3>
									<p aria-hidden className="mt-1 text-sm text-zinc-500">
										Shop now
									</p>
								</ImageLink>
							))}
						</div>
					</TabPanel>
				))}
			</TabPanels>
		</TabGroup>

		<div className="space-y-6 border-t border-twilight-200 px-4 py-6">
			{navigation.pages.map((page) => (
				<div key={page.text} className="flow-root">
					<ActiveLink
						href={page.href}
						className="-m-2 block p-2 font-medium text-zinc-700 transition-colors duration-150 ease-in-out hover:text-skyfall-500"
						activeClassName="text-skyfall-500"
						exact={page.text === "Home"}
					>
						{page.text}
					</ActiveLink>
				</div>
			))}
		</div>
	</Dialog>
);
