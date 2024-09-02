import { BiChevronDown } from "react-icons/bi";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

interface Props {
	name: string;
	children: React.JSX.Element;
}

export const ProductFilterGroupWrapper = ({ name, children }: Props) => (
	<Disclosure as="div" className="border-t border-zinc-300 px-4 py-6">
		<h3 className="-my-3 flow-root">
			<DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm text-zinc-700 hover:text-zinc-900">
				<span className="font-medium">{name}</span>
				<span className="ml-6 flex items-center">
					<BiChevronDown
						aria-hidden
						className="size-5 rotate-0 transform text-zinc-500 transition-transform ease-in-out group-data-[open]:-rotate-180"
					/>
				</span>
			</DisclosureButton>
		</h3>
		<DisclosurePanel className="pt-6">{children}</DisclosurePanel>
	</Disclosure>
);
