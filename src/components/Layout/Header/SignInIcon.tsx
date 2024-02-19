import { FiUser } from "react-icons/fi";

import Link from "next/link";

export const SignInIcon = () => (
	<Link href="/sign-in">
		<span className="sr-only">Sign in</span>
		<FiUser
			className="h-5 w-5 text-zinc-700 transition-colors hover:text-skyfall-500 md:h-6 md:w-6"
			aria-hidden
		/>
	</Link>
);
