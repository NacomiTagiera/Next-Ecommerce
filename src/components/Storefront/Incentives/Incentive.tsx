import { BlurredImage } from "@/components/UI/BlurredImage";

type Props = {
	name: string;
	imageSrc: string;
	description: string;
};

export const Incentive = async ({ name, imageSrc, description }: Props) => (
	<div className="sm:flex lg:block">
		<div className="sm:flex-shrink-0">
			<BlurredImage src={imageSrc} alt={name} width={64} height={64} className="h-16 w-16" />
		</div>
		<div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
			<h3 className="text-sm font-medium text-gray-900">{name}</h3>
			<p className="mt-2 text-sm text-gray-500">{description}</p>
		</div>
	</div>
);
