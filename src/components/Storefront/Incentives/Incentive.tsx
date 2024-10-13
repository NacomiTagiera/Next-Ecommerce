import { type IconType } from "react-icons";

interface Props {
	name: string;
	icon: IconType;
	description: string;
}

export const Incentive = async ({ name, icon: Icon, description }: Props) => (
	<article className="sm:flex lg:block">
		<Icon className="size-14 text-zinc-900 sm:flex-shrink-0 lg:size-16" aria-hidden />
		<div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
			<h3 className="text-sm font-medium text-zinc-900 lg:text-base">{name}</h3>
			<p className="mt-2 text-sm text-zinc-700">{description}</p>
		</div>
	</article>
);
