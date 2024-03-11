import { cn } from "@/lib/utils";

type Props = {
	content: string;
	className?: string;
};

export const Prose = ({ content, className }: Props) => {
	return <div className={cn("prose", className)} dangerouslySetInnerHTML={{ __html: content }} />;
};
