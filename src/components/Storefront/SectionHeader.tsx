import { cn } from "@/lib/utils";

type Props = {
	title: string;
	description?: string;
	id?: string;
	center?: boolean;
	className?: string;
	headerClassName?: string;
	descriptionClassName?: string;
	Tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const SectionHeader = ({
	title,
	description,
	id,
	center,
	className,
	headerClassName,
	descriptionClassName,
	Tag = "h2",
}: Props) => (
	<hgroup
		className={cn("mb-16 max-w-3xl", className, {
			"mx-auto text-center": center,
		})}
	>
		<Tag id={id} className={cn("text-3xl font-bold tracking-tight text-zinc-900", headerClassName)}>
			{title}
		</Tag>
		{description && (
			<p className={cn("mt-4 text-base text-zinc-700 lg:text-lg", descriptionClassName)}>
				{description}
			</p>
		)}
	</hgroup>
);
