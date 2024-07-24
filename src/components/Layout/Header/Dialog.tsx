import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import { Dialog as UiDialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";

import { IconButton } from "@/components/UI/IconButton";

interface Props {
	children: React.ReactNode;
	open: boolean;
	onClose: () => void;
}

export const Dialog = ({ children, open, onClose }: Props) => (
	<Transition show={open} as={Fragment}>
		<UiDialog as="aside" className="relative z-40 lg:hidden" onClose={onClose}>
			<TransitionChild
				as={Fragment}
				enter="transition-opacity ease-linear duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity ease-linear duration-300"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="fixed inset-0 bg-black/50" />
			</TransitionChild>

			<div className="fixed inset-0 z-40 flex backdrop-blur-sm">
				<TransitionChild
					as={Fragment}
					enter="transition ease-in-out duration-300 transform"
					enterFrom="-translate-x-full"
					enterTo="translate-x-0"
					leave="transition ease-in-out duration-300 transform"
					leaveFrom="translate-x-0"
					leaveTo="-translate-x-full"
				>
					<DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-twilight-50 pb-8 shadow-xl">
						<div className="flex px-4 pb-2 pt-5">
							<IconButton
								icon={IoMdClose}
								hiddenLabel="Close menu dialog"
								onClick={onClose}
								className="-m-2 !p-2"
							/>
						</div>

						{children}
					</DialogPanel>
				</TransitionChild>
			</div>
		</UiDialog>
	</Transition>
);
