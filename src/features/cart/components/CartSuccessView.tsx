import { IoCheckmarkDoneCircle } from "react-icons/io5";

import { formatPrice } from "@/lib/utils";

export const CartSuccessView = ({ total }: { total: number }) => {
	return (
		<article className="my-12 flex flex-col items-center justify-center text-center">
			<h1 className="flex items-center gap-x-1 text-4xl font-extrabold text-green-500">
				<IoCheckmarkDoneCircle aria-hidden className="size-7" />
				Success!
			</h1>
			<p className="mt-3 text-2xl font-semibold md:text-3xl">Thank you for your purchase!</p>
			<p className="mt-2 text-xl font-medium text-zinc-800 md:text-2xl">
				Your order total was <strong>{formatPrice(total / 100)}</strong>
			</p>
			<p className="text-lg italic text-zinc-700">Receipt has been sent to your email.</p>
		</article>
	);
};
