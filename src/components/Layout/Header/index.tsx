import { getCategoriesList } from "@/app/api/categories";
import { getCollectionsList } from "@/app/api/collections";
import { navLinks } from "@/lib/constants";

import { Navbar } from "./Navbar";

export const Header = async () => {
	const [categories, collections] = await Promise.all([
		getCategoriesList(true),
		getCollectionsList(true),
	]);

	const navigation = {
		groupings: [
			{
				name: "Categories",
				featured: categories,
			},
			{
				name: "Collections",
				featured: collections,
			},
		],
		pages: navLinks,
	};

	return (
		<div className="sticky top-0 z-10 w-full border-b border-gray-300 bg-white py-1 shadow-md shadow-gray-200">
			<Navbar navigation={navigation} />
		</div>
	);
};
