import Link from "next/link";

import { Logo } from "@/components/UI/Logo";
import type {
	CategoryListItemFragment,
	CollectionListItemFragment,
} from "@/graphql/generated/graphql";
import { restOfFooterLinks, socials } from "@/lib/constants";

import { FooterMenu } from "./FooterMenu";
import { FooterSocialLink } from "./FooterSocialLink";

type Props = {
	categories: CategoryListItemFragment[];
	collections: CollectionListItemFragment[];
};

const getFooterLinks = (
	categories: CategoryListItemFragment[],
	collections: CollectionListItemFragment[],
) => {
	const footerLinks = [
		{
			header: "Categories",
			items: categories,
		},
		{
			header: "Collections",
			items: collections,
		},
	];

	footerLinks.push(...restOfFooterLinks);

	return footerLinks;
};

export const Footer = ({ categories, collections }: Props) => {
	const footerLinks = getFooterLinks(categories, collections);

	return (
		<footer className="bg-wild-blue-yonder-100 text-sm text-gray-500">
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
					<div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 lg:col-span-2 lg:text-left">
						{footerLinks.map((link, index) => (
							<div key={index}>
								<FooterMenu {...link} />
							</div>
						))}
					</div>
				</div>
				<div className="mt-12 border-t border-gray-100 pt-6 text-center sm:flex sm:justify-between sm:text-left">
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
