export default function StaticLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto w-full max-w-5xl p-6">{children}</div>
		</div>
	);
}
