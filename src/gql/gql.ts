/* eslint-disable */
import * as types from './graphql';



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
    "query CategoriesGetList {\n  categories {\n    slug\n    name\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionsGetList {\n  collections {\n    name\n    slug\n  }\n}": types.CollectionsGetListDocument,
    "query ColorsGetList {\n  productColorVariants {\n    color\n  }\n}": types.ColorsGetListDocument,
    "query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    ...ProductsListItem\n    description\n  }\n}": types.ProductGetBySlugDocument,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(where: {slug: $slug}) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collection(where: {slug: $slug}) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetBySearch($search: String!) {\n  products(where: {name_contains: $search}) {\n    ...ProductsListItem\n  }\n}": types.ProductsGetBySearchDocument,
    "query ProductsGetList {\n  products {\n    ...ProductsListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetRelated($slug: String!, $categories: [String!]) {\n  products(\n    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}\n    first: 4\n  ) {\n    ...ProductsListItem\n  }\n}": types.ProductsGetRelatedDocument,
    "fragment ProductsListItem on Product {\n  slug\n  name\n  price\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}": types.ProductsListItemFragmentDoc,
    "query SizesGetList {\n  productSizeVariants {\n    size\n  }\n}": types.SizesGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    slug\n    name\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ColorsGetList {\n  productColorVariants {\n    color\n  }\n}"): typeof import('./graphql').ColorsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    ...ProductsListItem\n    description\n  }\n}"): typeof import('./graphql').ProductGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  category(where: {slug: $slug}) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collection(where: {slug: $slug}) {\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearch($search: String!) {\n  products(where: {name_contains: $search}) {\n    ...ProductsListItem\n  }\n}"): typeof import('./graphql').ProductsGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList {\n  products {\n    ...ProductsListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetRelated($slug: String!, $categories: [String!]) {\n  products(\n    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}\n    first: 4\n  ) {\n    ...ProductsListItem\n  }\n}"): typeof import('./graphql').ProductsGetRelatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on Product {\n  slug\n  name\n  price\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SizesGetList {\n  productSizeVariants {\n    size\n  }\n}"): typeof import('./graphql').SizesGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
