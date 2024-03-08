import { Button } from "@/components/UI/Button";

import { SectionHeader } from "../SectionHeader";

type Props = {
	title: string;
	description: string;
};

export const HeroHeader = ({ title, description }: Props) => (
	<div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
		<SectionHeader
			title={title}
			description={description}
			className="mb-0"
			headerClassName="text-4xl sm:text-5xl md:text-6xl"
			descriptionClassName="relative mt-6 text-lg leading-8 sm:max-w-md lg:max-w-none"
			Tag="h1"
		/>
		<Button
			href="/products"
			size="lg"
			className="mt-16 inline-block px-8 transition-shadow hover:shadow-md"
		>
			Browse Products
		</Button>
	</div>
);
