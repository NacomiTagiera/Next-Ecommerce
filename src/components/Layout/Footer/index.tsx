import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

import Link from "next/link";

import { Logo } from "@/components/UI/Logo";
import { type CategoryListItemFragment } from "@/graphql/generated/graphql";
import { footerLinks } from "@/lib/constants";

import { FooterMenu } from "./FooterMenu";
import { FooterSocialLink } from "./FooterSocialLink";

interface Props {
	categories: CategoryListItemFragment[];
	collections: CategoryListItemFragment[];
}

export const socials = [
	{
		icon: FiLinkedin,
		href: "https://www.linkedin.com/in/jakub-pawlak-frontend-dev",
		name: "LinkedIn",
	},
	{
		icon: FiGithub,
		href: "https://github.com/NacomiTagiera",
		name: "GitHub",
	},
	{
		icon: FiFacebook,
		href: "https://www.facebook.com/kubapawlak123321",
		name: "Facebook",
	},
] as const;

export const Footer = async ({ categories, collections }: Props) => {
	const allFooterLinks = [
		{
			header: "Categories",
			items: categories.map((category) => ({
				name: category.name,
				href: `/categories/${category.slug}`,
			})),
		},
		{
			header: "Collections",
			items: collections.map((collection) => ({
				name: collection.name,
				href: `/collections/${collection.slug}`,
			})),
		},
		...footerLinks,
	];

	return (
		<footer className="bg-white text-sm text-zinc-700">
			<div className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-10">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div className="flex flex-col items-center space-y-5 lg:items-start">
						<Link href="/">
							<Logo className="h-auto w-20 md:w-28" includeText />
						</Link>
						<p className="mt-6 max-w-md text-justify leading-relaxed sm:max-w-xs">
							Shop the latest apparel and accessories for athletes of all levels. Find your winning
							edge with top-quality products and unbeatable deals.
						</p>
					</div>
					<nav
						aria-label="Footer navigation"
						className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:col-span-2 lg:text-left"
					>
						{allFooterLinks.map((link) => (
							<div key={link.header}>
								<FooterMenu {...link} />
							</div>
						))}
					</nav>
				</div>
				<div className="mt-12 border-t border-white pt-6 text-center sm:flex sm:justify-between sm:text-left">
					<div className="flex items-center justify-center space-x-4 sm:order-2">
						{socials.map((social) => (
							<FooterSocialLink key={social.name} {...social} />
						))}
					</div>
					<p className="mt-4 sm:order-1 sm:mt-0">
						&copy; {new Date().getFullYear()} Next Sports. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
