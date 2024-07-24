import {
	type ProductColorVariantFragment,
	type ProductSizeVariantFragment,
} from "@/graphql/generated/graphql";

export type VariantsType = ProductColorVariantFragment[] | ProductSizeVariantFragment[];
