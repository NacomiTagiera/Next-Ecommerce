import Link from "next/link";

type Props = {
	title: string;
	description: string;
};

export const HeroHeader = ({ title, description }: Props) => (
	<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
		<hgroup>
			<h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">{title}</h1>
			<p className="relative mt-6 text-lg leading-8 text-zinc-700 sm:max-w-md lg:max-w-none">
				{description}
			</p>
		</hgroup>
		<Link
			href="/products"
			className="mt-16 inline-block rounded-md border border-transparent bg-azure-radiance-500 px-8 py-3 text-center font-medium text-white hover:bg-azure-radiance-600"
		>
			Browse Products
		</Link>
	</div>
);
