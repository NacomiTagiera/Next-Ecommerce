import {
	ProductGetByIdDocument,
	type ProductGetByIdQuery,
	ProductGetBySlugDocument,
	type ProductGetBySlugQuery,
	ProductsGetRelatedDocument,
} from "@/graphql/generated/graphql";
import { executeGraphql } from "@/lib/executeGraphql";

type Params = { id?: string; slug?: string };

export async function getProductByIdOrSlug(params: {
	id: string;
	slug?: undefined;
}): Promise<ProductGetByIdQuery["product"]>;
export async function getProductByIdOrSlug(params: {
	id?: undefined;
	slug: string;
}): Promise<ProductGetBySlugQuery["product"]>;

export async function getProductByIdOrSlug(params: Params = {}) {
	const { id, slug } = params;

	if (!id && !slug) {
		throw new Error("An ID or slug must be provided");
	}

	if (id) {
		const res = await executeGraphql({
			query: ProductGetByIdDocument,
			variables: { id },
			next: {
				revalidate: 60 * 10,
			},
		});

		if (!res.product) {
			throw new Error("Product not found");
		}

		return res.product;
	} else if (slug) {
		const res = await executeGraphql({
			query: ProductGetBySlugDocument,
			variables: { slug },
			next: {
				revalidate: 60 * 10,
			},
		});

		if (!res.product) {
			throw new Error("Product not found");
		}

		return res.product;
	}
}

export const getRelatedProducts = async (productSlug: string, categoriesSlugs: string[]) => {
	const { products } = await executeGraphql({
		query: ProductsGetRelatedDocument,
		variables: {
			slug: productSlug,
			categoriesSlugs,
		},
	});

	return products;
};
