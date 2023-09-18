import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="border-t bg-slate-50">
			<div className="mx-auto max-w-7xl px-6 py-8">
				<Link href="/" className="text-sm leading-6 text-cyan-700 transition hover:text-blue-900">
					Terms
				</Link>
				<p className="mt-2 text-center text-xs leading-7 text-slate-500">
					&copy; {new Date().getFullYear()} Demo
				</p>
			</div>
		</footer>
	);
};
