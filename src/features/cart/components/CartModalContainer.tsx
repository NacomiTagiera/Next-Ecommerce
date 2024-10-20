import { Overlay } from "@/components/UI/Overlay";

interface Props {
	children: React.ReactNode;
}

export const CartModalContainer = ({ children }: Props) => (
	<aside
		className="fixed inset-0 z-40 flex justify-end"
		aria-labelledby="cart-modal-title"
		role="dialog"
		aria-modal="true"
	>
		<Overlay />
		<div className="relative flex size-full max-w-sm animate-slide-in-fade flex-col overflow-y-auto bg-twilight-50 px-4 py-6 pb-8 shadow-xl sm:px-6">
			{children}
		</div>
	</aside>
);
