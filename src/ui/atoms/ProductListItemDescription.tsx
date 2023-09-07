import { formatPrice } from "@/utils";
import { type ProductListItem } from "@/types";

type Props = {
	product: ProductListItem;
};

export const ProductListItemDescription = ({
	product: { name, category, price, rating },
}: Props) => {
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h3 className="text-sm font-semibold">{name}</h3>
				<p className="small-caps text-sm font-medium " data-testid="product-price">
					{formatPrice(price / 100)}
				</p>
			</div>

			<div className="mt-1 flex flex-row justify-between">
				<p className="text-sm text-slate-500">{category}</p>

				<div className="flex flex-row items-center gap-2" title={rating + " out of 5 stars"}>
					<p aria-hidden="true" className="small-caps text-xs" data-testid="product-rating">
						{rating}
					</p>
					<div className="flex items-end">
						<svg
							xmlns="http://www.w3.orgcategory"
							width="120"
							height="24"
							viewBox="0 0 120 24"
							className="h-4 w-20 flex-shrink-0 fill-current"
							aria-hidden="true"
						>
							<defs>
								<polygon
									id="star"
									fill="#fff"
									points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
								></polygon>
								<mask id="rating">
									<rect width="120" height="24" fill="#000" />
									<use href="#star" x="0" fill="#fff" />
									<use href="#star" x="24" fill="#fff" />
									<use href="#star" x="48" fill="#fff" />
									<use href="#star" x="72" fill="#fff" />
									<use href="#star" x="96" fill="#fff" />
								</mask>
							</defs>
							<rect mask="url(#rating)" width="120" height="24" className="text-slate-500"></rect>
							<rect
								mask="url(#rating)"
								width={rating * 24}
								height="24"
								className="text-yellow-500"
							></rect>
						</svg>
					</div>
					<p className="sr-only">{rating} out of 5 stars</p>
				</div>
			</div>
		</div>
	);
};
