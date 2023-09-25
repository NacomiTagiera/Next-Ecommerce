import Link from "next/link";
import NextImage from "next/image";
import { FooterMenu } from "./FooterMenu";
import { restOfFooterLinks, socials } from "@/lib/constants";
import { getCategoriesList } from "@/api/categories";
import { getCollectionsList } from "@/api/collections";

const getFooterLinks = async () => {
	const categories = await getCategoriesList();
	const collections = await getCollectionsList();

	const footerLinks = [
		{
			header: "Categories",
			items: [...categories],
		},
		{
			header: "Collections",
			items: [...collections],
		},
	];

	footerLinks.push(...restOfFooterLinks);

	return footerLinks;
};

export const Footer = async () => {
	const footerLinks = await getFooterLinks();

	return (
		<footer className="bg-white text-sm text-gray-500">
			<div className="mx-auto max-w-screen-xl px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-10">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div className="flex flex-col items-center space-y-5 lg:items-start">
						<Link href="/">
							<span className="sr-only">Next Sports</span>
							<NextImage src="/images/logo.png" alt="Next Sports Logo" width={86} height={32} />
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
							<a
								href={social.href}
								key={social.name}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:animate-jelly"
							>
								<span className="sr-only">{social.name}</span>
								<social.icon aria-hidden="true" className="h-6 w-6" />
							</a>
						))}
					</div>
					<p className="mt-4 sm:order-1 sm:mt-0">&copy; 2023 Next Sports. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};
