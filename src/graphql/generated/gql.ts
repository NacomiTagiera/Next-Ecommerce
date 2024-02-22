/* eslint-disable */
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
	"fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n    }\n  }\n}":
		types.CartFragmentDoc,
	"fragment CategoryListItem on Category {\n  slug\n  name\n}": types.CategoryListItemFragmentDoc,
	"fragment CollectionListItem on Collection {\n  slug\n  name\n}":
		types.CollectionListItemFragmentDoc,
	"fragment ProductColorVariant on ProductColorVariant {\n  __typename\n  name\n}":
		types.ProductColorVariantFragmentDoc,
	"fragment ProductDetails on Product {\n  ...ProductListItem\n  description\n  variants {\n    ... on ProductColorVariant {\n      ...ProductColorVariant\n    }\n    ... on ProductSizeVariant {\n      ...ProductSizeVariant\n    }\n  }\n  reviews {\n    ...Review\n  }\n}":
		types.ProductDetailsFragmentDoc,
	"fragment ProductListItem on Product {\n  id\n  slug\n  name\n  price\n  rating\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}":
		types.ProductListItemFragmentDoc,
	"fragment ProductSizeVariant on ProductSizeVariant {\n  __typename\n  name\n}":
		types.ProductSizeVariantFragmentDoc,
	"fragment Review on Review {\n  id\n  name\n  email\n  rating\n  headline\n  content\n}":
		types.ReviewFragmentDoc,
	"mutation CartAddProduct($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}":
		types.CartAddProductDocument,
	"mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}":
		types.CartCreateDocument,
	"mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}":
		types.CartRemoveProductDocument,
	"mutation CartUpdateProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}":
		types.CartUpdateProductQuantityDocument,
	"mutation ProductUpdateRating($productId: ID!, $rating: Float!) {\n  updateProduct(where: {id: $productId}, data: {rating: $rating}) {\n    id\n  }\n  publishProduct(where: {id: $productId}) {\n    id\n  }\n}":
		types.ProductUpdateRatingDocument,
	"query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}":
		types.CartGetByIdDocument,
	"query CategoriesGetList($includeImg: Boolean = false) {\n  categories {\n    ...CategoryListItem\n    image @include(if: $includeImg) {\n      url\n    }\n  }\n}":
		types.CategoriesGetListDocument,
	"query CategoryGetBySlug($slug: String!, $limit: Int!, $offset: Int!) {\n  category(where: {slug: $slug}) {\n    ...CategoryListItem\n    description\n    products(first: $limit, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}":
		types.CategoryGetBySlugDocument,
	"query CollectionGetBySlug($slug: String!, $limit: Int!, $offset: Int!) {\n  collection(where: {slug: $slug}) {\n    ...CollectionListItem\n    description\n    image {\n      url\n    }\n    products(first: $limit, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}":
		types.CollectionGetBySlugDocument,
	"query CollectionsGetList($includeImg: Boolean = false, $includeDescription: Boolean = false) {\n  collections {\n    ...CollectionListItem\n    description @include(if: $includeDescription)\n    image @include(if: $includeImg) {\n      url\n    }\n  }\n}":
		types.CollectionsGetListDocument,
	"query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}":
		types.ProductGetByIdDocument,
	"query ProductsGetBySearch($search: String!) {\n  products(where: {_search: $search}) {\n    ...ProductListItem\n  }\n}":
		types.ProductsGetBySearchDocument,
	"query ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}":
		types.ProductsGetCountDocument,
	"query ProductsGetCountInCategory($slug: String) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}":
		types.ProductsGetCountInCategoryDocument,
	"query ProductsGetCountInCollection($slug: String) {\n  productsConnection(where: {collections_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}":
		types.ProductsGetCountInCollectionDocument,
	"query ProductGetList($limit: Int!, $offset: Int!) {\n  products(first: $limit, skip: $offset) {\n    ...ProductListItem\n  }\n}":
		types.ProductGetListDocument,
	"query ProductsGetRelated($slug: String!, $categoriesSlugs: [String!]) {\n  products(\n    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categoriesSlugs}}}\n    first: 4\n  ) {\n    ...ProductListItem\n  }\n}":
		types.ProductsGetRelatedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n    }\n  }\n}",
): typeof import("./graphql").CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment CategoryListItem on Category {\n  slug\n  name\n}",
): typeof import("./graphql").CategoryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment CollectionListItem on Collection {\n  slug\n  name\n}",
): typeof import("./graphql").CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment ProductColorVariant on ProductColorVariant {\n  __typename\n  name\n}",
): typeof import("./graphql").ProductColorVariantFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment ProductDetails on Product {\n  ...ProductListItem\n  description\n  variants {\n    ... on ProductColorVariant {\n      ...ProductColorVariant\n    }\n    ... on ProductSizeVariant {\n      ...ProductSizeVariant\n    }\n  }\n  reviews {\n    ...Review\n  }\n}",
): typeof import("./graphql").ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment ProductListItem on Product {\n  id\n  slug\n  name\n  price\n  rating\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}",
): typeof import("./graphql").ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment ProductSizeVariant on ProductSizeVariant {\n  __typename\n  name\n}",
): typeof import("./graphql").ProductSizeVariantFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "fragment Review on Review {\n  id\n  name\n  email\n  rating\n  headline\n  content\n}",
): typeof import("./graphql").ReviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation CartAddProduct($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}",
): typeof import("./graphql").CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}",
): typeof import("./graphql").CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation CartUpdateProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}",
): typeof import("./graphql").CartUpdateProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "mutation ProductUpdateRating($productId: ID!, $rating: Float!) {\n  updateProduct(where: {id: $productId}, data: {rating: $rating}) {\n    id\n  }\n  publishProduct(where: {id: $productId}) {\n    id\n  }\n}",
): typeof import("./graphql").ProductUpdateRatingDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    ...Cart\n  }\n}",
): typeof import("./graphql").CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CategoriesGetList($includeImg: Boolean = false) {\n  categories {\n    ...CategoryListItem\n    image @include(if: $includeImg) {\n      url\n    }\n  }\n}",
): typeof import("./graphql").CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CategoryGetBySlug($slug: String!, $limit: Int!, $offset: Int!) {\n  category(where: {slug: $slug}) {\n    ...CategoryListItem\n    description\n    products(first: $limit, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}",
): typeof import("./graphql").CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CollectionGetBySlug($slug: String!, $limit: Int!, $offset: Int!) {\n  collection(where: {slug: $slug}) {\n    ...CollectionListItem\n    description\n    image {\n      url\n    }\n    products(first: $limit, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}",
): typeof import("./graphql").CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query CollectionsGetList($includeImg: Boolean = false, $includeDescription: Boolean = false) {\n  collections {\n    ...CollectionListItem\n    description @include(if: $includeDescription)\n    image @include(if: $includeImg) {\n      url\n    }\n  }\n}",
): typeof import("./graphql").CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductDetails\n  }\n}",
): typeof import("./graphql").ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetBySearch($search: String!) {\n  products(where: {_search: $search}) {\n    ...ProductListItem\n  }\n}",
): typeof import("./graphql").ProductsGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").ProductsGetCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetCountInCategory($slug: String) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").ProductsGetCountInCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetCountInCollection($slug: String) {\n  productsConnection(where: {collections_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}",
): typeof import("./graphql").ProductsGetCountInCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductGetList($limit: Int!, $offset: Int!) {\n  products(first: $limit, skip: $offset) {\n    ...ProductListItem\n  }\n}",
): typeof import("./graphql").ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: "query ProductsGetRelated($slug: String!, $categoriesSlugs: [String!]) {\n  products(\n    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categoriesSlugs}}}\n    first: 4\n  ) {\n    ...ProductListItem\n  }\n}",
): typeof import("./graphql").ProductsGetRelatedDocument;

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}
