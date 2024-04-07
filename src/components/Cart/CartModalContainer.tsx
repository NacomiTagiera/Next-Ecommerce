import { Overlay } from "../UI/Overlay";

export const CartModalContainer = ({ children }: { children: React.ReactNode }) => (
	<aside className="relative z-40" aria-labelledby="cart-modal-title" role="dialog" aria-modal>
		<div className="fixed inset-0 z-40 flex size-full justify-end">
			<Overlay />
			<div className="relative flex w-full max-w-sm animate-slide-in-fade flex-col overflow-y-auto bg-twilight-50 px-4 py-6 pb-8 shadow-xl sm:px-6">
				{children}
			</div>
		</div>
	</aside>
);
