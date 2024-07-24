export const CartWrapper = ({ children }: { children: React.ReactNode }) => (
	<>
		<h1 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">Shopping Cart</h1>
		<div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">{children}</div>
	</>
);
