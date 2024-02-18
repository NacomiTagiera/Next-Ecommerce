import { IoCartOutline } from "react-icons/io5";

import Link from "next/link";

export const CartIcon = () => (
	<div className="ml-2 flow-root">
		<Link href="/cart" className="group -m-2 flex items-center p-2">
			<IoCartOutline
				className="h-6 w-6 flex-shrink-0 text-zinc-700 group-hover:text-wild-blue-yonder-600 md:h-7 md:w-7"
				aria-hidden
			/>
			<span className="ml-2 font-medium text-zinc-700 group-hover:text-wild-blue-yonder-600">
				0
			</span>
			<span className="sr-only">items in cart</span>
		</Link>
	</div>
);
