import { Suspense } from "react";
import { FiUser } from "react-icons/fi";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import Link from "next/link";

import { IconButton } from "@/components/UI/IconButton";
import { Logo } from "@/components/UI/Logo";
import { navLinks } from "@/lib/constants";
import { type CategoryWithImage } from "@/types";

import { Navbar } from "./Navbar";
import { SearchInput } from "./SearchInput";
import { ShoppingBagIcon } from "./ShoppingBagIcon";
import { UserProfileDropdown } from "./UserProfileDropdown";

interface Props {
	categories: CategoryWithImage[];
	collections: CategoryWithImage[];
}

export const Header = async ({ categories, collections }: Props) => {
	const navigation = {
		groupings: [
			{
				name: "Categories",
				featured: categories,
			},
			{
				name: "Collections",
				featured: collections,
			},
		],
		pages: navLinks,
	};

	return (
		<div className="sticky top-0 z-10 w-full border-b border-gray-300 bg-white py-1 shadow-md shadow-gray-200">
			<Navbar navigation={navigation}>
				<div className="order-first hidden lg:flex lg:flex-1">
					<Link href="/">
						<Logo priority includeText className="h-9 w-auto" />
					</Link>
				</div>
				<Link href="/" className="lg:hidden">
					<Logo priority includeText className="h-9 w-auto" />
				</Link>
				<div className="flex flex-1 items-center justify-end">
					<Suspense>
						<SearchInput id="desktop-search" className="mx-auto hidden lg:block" />
					</Suspense>
					<div className="ml-1 flex items-center">
						<SignedIn>
							<UserProfileDropdown />
						</SignedIn>
						<SignedOut>
							<IconButton href="/sign-in" icon={FiUser} hiddenLabel="Sign in" />
						</SignedOut>
						<ShoppingBagIcon />
					</div>
				</div>
			</Navbar>
		</div>
	);
};
