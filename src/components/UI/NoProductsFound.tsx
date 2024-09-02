import NextImage from "next/image";

import notFound from "/public/images/no-products-found.png";

export const NoProductsFound = () => (
	<div className="flex h-full items-center justify-center py-10">
		<h2 className="sr-only">No products found</h2>
		<NextImage
			src={notFound}
			alt="Sad shopping bag icon with text 'Sorry, no products found'"
			placeholder="blur"
		/>
	</div>
);
