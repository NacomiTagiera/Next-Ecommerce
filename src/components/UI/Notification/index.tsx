import { Fragment, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdClose, MdErrorOutline } from "react-icons/md";
import { Transition } from "@headlessui/react";

import { IconButton } from "../IconButton";

interface Props {
	show: boolean;
	message: string;
	onClose: () => void;
	status?: "success" | "error";
	duration?: number;
}

const getStatusProps = (status: "success" | "error") => {
	switch (status) {
		case "success":
			return {
				icon: <FaRegCheckCircle className="size-5 text-green-500" data-testid="success-icon" />,
				message: "Success!",
			};
		case "error":
		default:
			return {
				icon: <MdErrorOutline className="size-5 text-red-600" data-testid="error-icon" />,
				message: "Ups! An error occurred",
			};
	}
};

export const Notification = ({
	show,
	message,
	onClose,
	status = "error",
	duration = 5000,
}: Props) => {
	if (duration <= 0) {
		throw new Error("Duration must be greater than 0");
	}

	useEffect(() => {
		if (show) {
			const timer = setTimeout(() => {
				onClose();
			}, duration);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [show, onClose, duration]);

	const { icon, message: statusMessage } = getStatusProps(status);

	return (
		<div
			aria-live="assertive"
			className="pointer-events-none fixed inset-0 z-20 flex items-end px-4 py-6 sm:items-start sm:p-6"
		>
			<div className="flex w-full flex-col items-center space-y-4 sm:items-end">
				<Transition
					show={show}
					as={Fragment}
					enter="transform ease-out duration-300 transition"
					enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
					enterTo="translate-y-0 opacity-100 sm:translate-x-0"
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
						<div className="p-4">
							<div className="flex items-start">
								<div className="flex-shrink-0 pt-1">{icon}</div>
								<div className="ml-3 w-0 flex-1">
									<p className="font-medium">{statusMessage}</p>
									<p className="mt-1 text-sm text-zinc-500">{message}</p>
								</div>
								<div className="ml-4 flex flex-shrink-0">
									<IconButton
										icon={MdClose}
										hiddenLabel="Close notification"
										size="sm"
										onClick={onClose}
									/>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</div>
	);
};
