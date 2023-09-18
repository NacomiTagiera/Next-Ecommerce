import Link from "next/link";
import { executeGraphql } from "@/api/products";
import { ProductsGetListDocument } from "@/gql/graphql";

export default async function ProductsPage() {
	const { products } = await executeGraphql(ProductsGetListDocument);

	return (
		<ul>
			{products.map((product) => (
				<li key={product.id}>
					<Link href={`/product/${product.id}`}>{product.name}</Link>
				</li>
			))}
		</ul>
	);
}
