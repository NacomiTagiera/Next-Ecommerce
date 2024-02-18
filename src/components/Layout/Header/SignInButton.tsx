import { IoIosLogIn } from "react-icons/io";

import Link from "next/link";

export const SignInButton = () => (
	<Link href="/sign-in" className="p-2 text-zinc-700 hover:text-wild-blue-yonder-600">
		<span className="sr-only">Sign in</span>
		<IoIosLogIn className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
	</Link>
);
