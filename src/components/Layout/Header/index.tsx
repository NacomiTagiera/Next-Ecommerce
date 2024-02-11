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
		<div className="sticky top-0 w-full bg-wild-blue-yonder-100 py-2">
			<Navbar navigation={navigation} />
		</div>
	);
};
