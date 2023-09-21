import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";

import { Footer } from "@/ui/organisms/Footer";
import { Navbar } from "@/ui/organisms/Navbar";
import { cn } from "@/lib/utils";

import "./globals.css";

const robotoFlex = Roboto_Flex({ subsets: ["latin", "latin-ext"], variable: "--font-roboto" });

export const metadata: Metadata = {
	title: "Produkty",
	description: "Produkty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={cn(
					"flex min-h-screen flex-col bg-neutral-50 text-black selection:bg-teal-300",
					robotoFlex.className,
				)}
			>
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
