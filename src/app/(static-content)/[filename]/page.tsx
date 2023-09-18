import { type ComponentType } from "react";
import { notFound } from "next/navigation";

export default async function StaticPage({ params }: { params: { filename: string } }) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);

	return (
		<article className="prose prose-lg prose-headings:text-slate-500">
			<Content />
		</article>
	);
}
