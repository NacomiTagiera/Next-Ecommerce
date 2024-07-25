import { IoMdClose } from "react-icons/io";
import { Dialog as UiDialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import { cn } from "@/lib/utils";

import { IconButton } from "./IconButton";

interface Props {
	children: React.ReactNode;
	open: boolean;
	onClose: () => void;
	showHeader?: boolean;
}

export const Dialog = ({ children, open, onClose, showHeader }: Props) => (
	<UiDialog
		as="aside"
		role="dialog"
		aria-labelledby="dialog-header"
		className="relative z-40"
		open={open}
		onClose={onClose}
	>
		<DialogBackdrop
			transition
			className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
		/>
		<div className="fixed inset-0 z-40 flex backdrop-blur-sm">
			<DialogPanel
				transition
				className="relative mr-auto flex size-full max-w-xs flex-col overflow-y-auto bg-twilight-50 pb-6 pt-4 shadow-xl transition duration-500 ease-in-out data-[closed]:-translate-x-full"
			>
				<div className="mb-2 flex items-center justify-between px-4">
					<h2
						id="dialog-header"
						className={cn(showHeader ? "text-lg font-medium text-zinc-900" : "sr-only")}
					>
						Menu
					</h2>
					<IconButton
						icon={IoMdClose}
						hiddenLabel="Close menu"
						onClick={onClose}
						className="ml-auto"
					/>
				</div>
				{children}
			</DialogPanel>
		</div>
	</UiDialog>
);
