import { HeroHeader } from "./HeroHeader";
import { ImageColumn } from "./ImageColumn";

export const Hero = () => {
	const assets = Array.from({ length: 5 }, (_, i) => `/images/hero/${i + 1}.webp`);
	const images = assets.map((asset, index) => {
		return {
			src: asset,
			alt: `Hero image ${index + 1} of our sport brand`,
		};
	});

	return (
		<section className="relative isolate overflow-hidden">
			<div className="mx-auto max-w-7xl px-6 pb-32 pt-20 lg:px-8 lg:pt-12">
				<div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
					<HeroHeader
						title="Sportswear Designed for Victory"
						description="Discover Unparalleled Comfort and Quality in Every Stitch of Our Activewear Collection—Engineered to Empower Your Workouts and Enhance Your Athletic Journey!"
					/>
					<div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
						<ImageColumn
							images={images.slice(0, 1)}
							className="ml-auto pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
						/>
						<ImageColumn
							images={images.slice(1, 3)}
							className="mr-auto sm:mr-0 sm:pt-32 lg:pt-36"
						/>
						<ImageColumn images={images.slice(3, 5)} className="pt-20 sm:pt-0" />
					</div>
				</div>
			</div>
		</section>
	);
};
