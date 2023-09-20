import { getAllProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getAllProducts();

	return <ProductList products={products} />;
}
