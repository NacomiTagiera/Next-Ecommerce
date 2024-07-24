import { BlurredImage } from "@/components/UI/BlurredImage";

interface Props {
	body: string;
	author: {
		name: string;
		handle: string;
		imageUrl: string;
	};
}

export const Testimonial = ({ author, body }: Props) => (
	<div className="pt-8 sm:inline-block sm:w-full sm:px-4">
		<figure className="rounded-2xl bg-white p-8 text-sm leading-6">
			<blockquote className="text-gray-900">
				<p>{`“${body}”`}</p>
			</blockquote>
			<figcaption className="mt-6 flex items-center gap-x-4">
				<BlurredImage
					src={author.imageUrl}
					alt={author.handle}
					width={40}
					height={40}
					className="h-10 w-10 rounded-full bg-gray-50"
				/>
				<div>
					<div className="font-semibold text-gray-900">{author.name}</div>
					<div className="text-gray-600">{`@${author.handle}`}</div>
				</div>
			</figcaption>
		</figure>
	</div>
);
