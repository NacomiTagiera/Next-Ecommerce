import { ProductRating } from "@/components/UI/ProductRating";
import { SectionHeader } from "@/components/UI/SectionHeader";

interface Props {
	children: React.ReactNode;
	productRating: number | null | undefined;
}

export const ReviewFormWrapper = ({ children, productRating }: Props) => (
	<section className="lg:col-span-4">
		<SectionHeader
			title="Share your thoughts"
			description="Have you used this product? How did you like it? Share your thoughts with others!"
			className="mb-5"
			headerClassName="text-2xl md:text-3xl"
			descriptionClassName="text-sm lg:text-base"
			Tag="h3"
		/>
		<ProductRating rating={productRating} size="lg" />
		{children}
	</section>
);
