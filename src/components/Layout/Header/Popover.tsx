import { Fragment } from "react";
import { Popover as UiPopover, Transition } from "@headlessui/react";

import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactNode;
	name: string;
};

export const Popover = ({ children, name }: Props) => (
	<UiPopover className="flex">
		{({ open, close }) => (
			<>
				<div className="relative flex">
					<UiPopover.Button
						className={cn(
							"relative z-10 flex items-center justify-center font-medium text-zinc-700 transition-colors duration-150 ease-in-out hover:text-skyfall-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-skyfall-500",
							open && "text-skyfall-500",
						)}
					>
						{name}
						<span
							className={cn(
								"absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out",
								open && "bg-skyfall-500",
							)}
							aria-hidden
						/>
					</UiPopover.Button>
				</div>

				<Transition
					as={Fragment}
					enter="transition ease-out duration-200"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition ease-in duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<UiPopover.Panel
						className="absolute inset-x-0 top-full text-sm text-zinc-600"
						onMouseLeave={close}
					>
						<div className="absolute inset-0 top-1/2 shadow" aria-hidden />
						<div className="relative bg-twilight-50">
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16" onClick={close}>
									{children}
								</div>
							</div>
						</div>
					</UiPopover.Panel>
				</Transition>
			</>
		)}
	</UiPopover>
);
