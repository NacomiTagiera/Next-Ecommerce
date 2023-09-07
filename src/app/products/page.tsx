import { ProductList } from "@/ui/organisms/ProductList";
import { products } from "@/constants";

export default function Products() {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
