import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";

import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { cn } from "@/lib/utils";

import "./globals.css";

const robotoFlex = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto-flex" });

export const metadata: Metadata = {
	metadataBase: new URL("https://next-sports-ecommerce.vercel.app/"),
	title: {
		default: "Next Sports",
		template: "%s | Next Sports",
	},
	description:
		"Discover a world of sports excellence at Next Sports. Shop the latest apparel and accessories for athletes of all levels. Find your winning edge with top-quality products and unbeatable deals.",
	applicationName: "Next Sports",
	authors: {
		name: "Jakub Pawlak",
		url: "https://www.linkedin.com/in/jakub-pawlak-frontend-dev",
	},
	creator: "Jakub Pawlak",
	formatDetection: {
		telephone: true,
		address: true,
		email: true,
	},
	openGraph: {
		type: "website",
		siteName: "Next Sports",
		url: "https://next-sports-ecommerce.vercel.app/",
		locale: "en_US",
	},
	icons: {
		icon: [
			{
				url: "/icons/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
			{
				url: "/icons/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
		],
		apple: [
			{
				url: "/icons/apple-touch-icon.png",
			},
		],
		other: [
			{
				rel: "android-chrome-192x192",
				url: "/icons/android-chrome-192x192.png",
			},
			{
				rel: "android-chrome-512x512",
				url: "/icons/android-chrome-512x512.png",
			},
		],
	},
	manifest: "/icons/manifest.json",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={cn(
					"flex min-h-screen flex-col overflow-x-hidden bg-white text-black",
					robotoFlex.className,
				)}
			>
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
