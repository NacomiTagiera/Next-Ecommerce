import { CategoriesGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getAllCategories = async () => {
	const res = await executeGraphql(CategoriesGetListDocument);

	return res.categories;
};
