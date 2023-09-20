import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";

import { Footer } from "@/ui/organisms/Footer";
import { Navbar } from "@/ui/organisms/Navbar";
import { cn } from "@/utils";

import "./globals.css";

const robotoFlex = Roboto_Flex({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "Produkty",
	description: "Produkty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={cn("flex min-h-screen flex-col", robotoFlex.className)}>
				<Navbar />
				<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
					{children}
				</section>
				<Footer />
			</body>
		</html>
	);
}
