"use client";

import { Fragment } from "react";
import { BiSolidPackage } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import { useClerk, useUser } from "@clerk/nextjs";
import { Menu, Transition } from "@headlessui/react";

import NextImage from "next/image";
import { useRouter } from "next/navigation";

import { UserProfileDropdownItem } from "./UserProfileDropdownItem";

const userLinks = [
	{
		href: "/orders",
		icon: BiSolidPackage,
		label: "Your Orders",
	},
	{
		href: "/profile",
		icon: IoIosSettings,
		label: "Manage Account",
	},
	{
		href: undefined,
		icon: PiSignOutBold,
		label: "Sign Out",
	},
] as const;

export const UserProfileDropdown = () => {
	const { signOut } = useClerk();
	const { user } = useUser();
	const router = useRouter();

	const username = user?.fullName || user?.emailAddresses[0]?.emailAddress || "";
	const userImage = user?.imageUrl || "/images/avatar.png";

	return (
		<Menu as="div" className="relative">
			<div>
				<Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-skyfall-400 focus:ring-offset-2 focus:ring-offset-skyfall-300">
					<span className="absolute -inset-1.5" />
					<span className="sr-only">Open user menu</span>
					<NextImage
						className="size-8 rounded-full"
						src={userImage}
						width="32"
						height="32"
						alt="Your avatar"
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="spacey-y-2 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-zinc-900 ring-opacity-5 focus:outline-none">
					<Menu.Item>
						<div className="flex items-center gap-2 px-4 py-2 text-sm">
							<NextImage
								className="size-7 rounded-full"
								src={userImage}
								alt="Your avatar"
								width="28"
								height="28"
							/>
							<p className="font-semibold">{username}</p>
						</div>
					</Menu.Item>
					{userLinks.map((item) => (
						<UserProfileDropdownItem
							key={item.label}
							href={item.href}
							onClick={
								item.label === "Sign Out"
									? async () => {
											await signOut();
											router.replace("/sign-in");
										}
									: undefined
							}
							icon={item.icon}
						>
							{item.label}
						</UserProfileDropdownItem>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
};
