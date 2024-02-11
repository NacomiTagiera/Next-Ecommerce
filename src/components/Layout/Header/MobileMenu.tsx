import { Fragment, Suspense } from "react";
import { Tab } from "@headlessui/react";

import type { Route } from "next";

import { ActiveLink } from "@/components/UI/ActiveLink";
import { type CategoryWithImage } from "@/types";

import { Dialog } from "./Dialog";
import { NavImage } from "./NavImage";
import { SearchInput } from "./SearchInput";
import { TabList } from "./TabList";

type Props = {
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
};

export const MobileMenu = ({ open, setOpen, navigation }: Props) => (
	<Dialog open={open} onClose={() => setOpen(false)}>
		<Suspense>
			<SearchInput id="mobile-search" className="mx-auto block w-72 pt-3 lg:hidden" />
		</Suspense>
		<Tab.Group as="div" className="mt-2">
			<TabList items={navigation.groupings} />
			<Tab.Panels as={Fragment}>
				{navigation.groupings.map((grouping) => (
					<Tab.Panel key={grouping.name} className="space-y-12 px-4 py-6">
						<div className="grid grid-cols-2 gap-x-4 gap-y-10">
							{grouping.featured.map((item) => (
								<NavImage
									key={item.slug}
									src={item.image?.url}
									width={136}
									height={136}
									name={item.name}
									slug={item.slug}
									grouping={grouping.name}
								/>
							))}
						</div>
					</Tab.Panel>
				))}
			</Tab.Panels>
		</Tab.Group>

		<div className="space-y-6 border-t border-wild-blue-yonder-200 px-4 py-6">
			{navigation.pages.map((page) => (
				<div key={page.text} className="flow-root">
					<ActiveLink
						href={page.href}
						className="-m-2 block p-2 font-medium text-zinc-700 transition-colors duration-150 ease-in-out hover:text-wild-blue-yonder-600"
						activeClassName="text-wild-blue-yonder-600"
						exact={page.text === "Home"}
					>
						{page.text}
					</ActiveLink>
				</div>
			))}
		</div>
	</Dialog>
);
