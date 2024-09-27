import { type ComponentType } from "react";

import { notFound } from "next/navigation";

export default async function StaticPage({ params }: { params: { filename: string } }) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);

	return (
		<article className="prose prose-lg prose-zinc mx-auto w-full lg:prose-xl prose-h1:text-center prose-h3:text-2xl prose-hr:border-zinc-400">
			<Content />
		</article>
	);
}
