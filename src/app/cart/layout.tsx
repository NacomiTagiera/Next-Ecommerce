export default function CartLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
			{children}
		</div>
	);
}
