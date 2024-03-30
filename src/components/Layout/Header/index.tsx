import { Suspense } from "react";

import Link from "next/link";

import { getCategoriesList } from "@/app/api/categories";
import { getCollectionsList } from "@/app/api/collections";
import { Logo } from "@/components/UI/Logo";
import { navLinks } from "@/lib/constants";

import { CartCountFromCookies } from "./CartCountFromCookies";
import { Navbar } from "./Navbar";
import { SearchInput } from "./SearchInput";
import { ShoppingBagIcon } from "./ShoppingBagIcon";
import { SignInIcon } from "./SignInIcon";

export const Header = async () => {
	const [categories, collections] = await Promise.all([
		getCategoriesList(true),
		getCollectionsList(true),
	]);

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
				<Link href="/" className="lg:hidden">
					<Logo priority includeText className="h-9 w-auto" />
				</Link>
				<div className="flex flex-1 items-center justify-end">
					<Suspense>
						<SearchInput id="desktop-search" className="mx-auto hidden lg:block" />
					</Suspense>
					<div className="ml-1 flex items-center">
						<SignInIcon />
						<ShoppingBagIcon>
							<CartCountFromCookies />
						</ShoppingBagIcon>
					</div>
				</div>
			</Navbar>
		</div>
	);
};
