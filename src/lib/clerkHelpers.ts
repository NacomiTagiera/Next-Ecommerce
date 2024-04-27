import { auth, clerkClient } from "@clerk/nextjs/server";

export const getUserEmail = async () => {
	const { userId } = auth();
	if (!userId) return;

	const userEmail = (await clerkClient.users.getUser(userId)).emailAddresses[0]?.emailAddress;
	return userEmail;
};
