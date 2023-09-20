import { ProductGetBySugDocument, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

export const getAllProducts = async () => {
	const res = await executeGraphql(ProductsGetListDocument);

	return res.products;
};

export const getProduct = async (slug: string) => {
	const res = await executeGraphql(ProductGetBySugDocument, { slug: slug });

	return res.products[0];
};
