import { SectionHeader } from "@/components/UI/SectionHeader";
import { testimonials } from "@/lib/constants";

import { Testimonial } from "./Testimonial";

export const Testimonials = () => (
	<section aria-labelledby="testimonials-heading" className="py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<SectionHeader
				id="testimonials-heading"
				title="Don’t just take our word. Read reviews from our customers"
				center
			/>
			<div className="mx-auto flow-root max-w-2xl lg:mx-0 lg:max-w-none">
				<div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
					{testimonials.map((testimonial) => (
						<Testimonial key={testimonial.author.handle} {...testimonial} />
					))}
				</div>
			</div>
		</div>
	</section>
);
