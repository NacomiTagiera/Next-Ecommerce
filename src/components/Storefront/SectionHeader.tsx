import { cn } from "@/lib/utils";

type Props = {
	title: string;
	description?: string;
	id?: string;
	center?: boolean;
	headerClassName?: string;
	descriptionClassName?: string;
};

export const SectionHeader = ({
	title,
	description,
	id,
	center,
	headerClassName,
	descriptionClassName,
}: Props) => (
	<hgroup
		className={cn("mb-16 max-w-3xl", {
			"mx-auto text-center": center,
		})}
	>
		<h2 id={id} className={cn("text-3xl font-bold tracking-tight text-zinc-900", headerClassName)}>
			{title}
		</h2>
		{description && (
			<p className={cn("mt-4 text-base text-zinc-700 lg:text-lg", descriptionClassName)}>
				{description}
			</p>
		)}
	</hgroup>
);
