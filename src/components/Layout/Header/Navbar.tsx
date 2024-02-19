"use client";

import { Suspense } from "react";
import { FaBars } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

import Link from "next/link";

import { Logo } from "@/components/UI/Logo";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import type { CategoryWithImage } from "@/types";

import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { MobileMenuButton } from "./MobileMenuButton";
import { SearchInput } from "./SearchInput";
import { ShoppingBagIcon } from "./ShoppingBagIcon";
import { SignInIcon } from "./SignInIcon";

type Props = {
	navigation: {
		groupings: {
			name: string;
			featured: CategoryWithImage[];
		}[];
		pages: {
			text: string;
			href: string;
		}[];
	};
};

export const Navbar = ({ navigation }: Props) => {
	const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

	return (
		<>
			<MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} navigation={navigation} />
			<header className="relative">
				<nav aria-label="Top navigation">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="hidden lg:flex lg:flex-1">
								<Link href="/">
									<Logo priority includeText className="h-9 w-auto" />
								</Link>
							</div>
							<div className="hidden h-full lg:flex">
								<DesktopMenu navigation={navigation} />
							</div>
							<div className="flex flex-1 items-center lg:hidden">
								<MobileMenuButton
									Icon={FaBars}
									label="Open menu"
									onClick={() => setMobileMenuOpen(true)}
								/>
								<MobileMenuButton
									Icon={FiSearch}
									label="Search"
									onClick={() => setMobileMenuOpen(true)}
									className="ml-2"
								/>
							</div>
							<Link href="/" className="lg:hidden">
								<Logo priority includeText className="h-9 w-auto" />
							</Link>
							<div className="flex flex-1 items-center justify-end">
								<Suspense>
									<SearchInput id="desktop-search" className="mx-auto hidden lg:block" />
								</Suspense>
								<div className="ml-1 flex items-center">
									<SignInIcon />
									<ShoppingBagIcon />
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};
