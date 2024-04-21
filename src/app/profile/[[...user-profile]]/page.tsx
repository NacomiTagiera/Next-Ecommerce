"use client";

import { BiSolidPackage } from "react-icons/bi";
import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
	return (
		<section className="mx-auto flex max-w-md justify-center p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<UserProfile path="/profile" routing="path">
				<UserProfile.Page label="account" />
				<UserProfile.Page label="security" />
				<UserProfile.Link label="Your Orders" url="/orders" labelIcon={<BiSolidPackage />} />
			</UserProfile>
		</section>
	);
}
