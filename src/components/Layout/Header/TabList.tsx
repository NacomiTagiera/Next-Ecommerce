import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";

interface Props {
	items: { name: string }[];
}

export const TabList = ({ items }: Props) => (
	<div className="border-b border-twilight-200">
		<Tab.List className="-mb-px flex space-x-8 px-4">
			{items.map((item) => (
				<Tab
					key={item.name}
					className={({ selected }) =>
						cn(
							selected ? "border-skyfall-500 text-skyfall-500" : "border-transparent text-zinc-800",
							"flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium",
						)
					}
				>
					{item.name}
				</Tab>
			))}
		</Tab.List>
	</div>
);
