import { executeGraphql } from "@/api/products";
import { ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";

//generate static params...

export default async function page({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: params.category,
	});

	return (
		<>
			<h2>Produkty z kategorii {params.category}</h2>
			<ProductList products={products} />
		</>
	);
}
