export default function ProductBrowserLayout({ children }: { children: React.ReactNode }) {
	return (
		<section
			aria-labelledby="products-heading"
			className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8"
		>
			{children}
		</section>
	);
}
