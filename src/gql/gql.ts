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
    "fragment CategoryListItem on Category {\n  slug\n  name\n}": types.CategoryListItemFragmentDoc,
    "fragment CollectionListItem on Collection {\n  slug\n  name\n}": types.CollectionListItemFragmentDoc,
    "fragment ProductDetails on Product {\n  slug\n  name\n  description\n  price\n  categories {\n    slug\n    name\n  }\n  images {\n    url\n  }\n}": types.ProductDetailsFragmentDoc,
    "fragment ProductListItem on Product {\n  slug\n  name\n  price\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}": types.ProductListItemFragmentDoc,
    "query CategoriesGetList {\n  categories {\n    ...CategoryListItem\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetBySlug($slug: String!, $limit: Int!, $offset: Int!) {\n  category(where: {slug: $slug}) {\n    ...CategoryListItem\n    description\n    products(first: $limit, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}": types.CategoryGetBySlugDocument,
    "query CollectionGetBySlug($slug: String!, $limit: Int!, $offset: Int!) {\n  collection(where: {slug: $slug}) {\n    ...CollectionListItem\n    description\n    image {\n      url\n    }\n    products(first: $limit, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionGetBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    ...ProductDetails\n  }\n}": types.ProductGetBySlugDocument,
    "query ProductGetColors($slug: String!) {\n  product(where: {slug: $slug}) {\n    variants {\n      ... on ProductColorVariant {\n        name\n      }\n    }\n  }\n}": types.ProductGetColorsDocument,
    "query ProductsGetCountInCollection($slug: String) {\n  productsConnection(where: {collections_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetCountInCollectionDocument,
    "query ProductGetSizes($slug: String!) {\n  product(where: {slug: $slug}) {\n    variants {\n      ... on ProductSizeVariant {\n        name\n      }\n    }\n  }\n}": types.ProductGetSizesDocument,
    "query ProductsGetBySearch($search: String!) {\n  products(where: {_search: $search}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetBySearchDocument,
    "query ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetCountDocument,
    "query ProductsGetCountInCategory($slug: String) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}": types.ProductsGetCountInCategoryDocument,
    "query ProductGetList($limit: Int!, $offset: Int!) {\n  products(first: $limit, skip: $offset) {\n    ...ProductListItem\n  }\n}": types.ProductGetListDocument,
    "query ProductsGetRelated($slug: String!, $categoriesSlugs: [String!]) {\n  products(\n    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categoriesSlugs}}}\n    first: 6\n  ) {\n    ...ProductListItem\n  }\n}": types.ProductsGetRelatedDocument,
    "query ProductsGetSlugs {\n  products {\n    slug\n  }\n}": types.ProductsGetSlugsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListItem on Category {\n  slug\n  name\n}"): typeof import('./graphql').CategoryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  slug\n  name\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  slug\n  name\n  description\n  price\n  categories {\n    slug\n    name\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  slug\n  name\n  price\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    ...CategoryListItem\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!, $limit: Int!, $offset: Int!) {\n  category(where: {slug: $slug}) {\n    ...CategoryListItem\n    description\n    products(first: $limit, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!, $limit: Int!, $offset: Int!) {\n  collection(where: {slug: $slug}) {\n    ...CollectionListItem\n    description\n    image {\n      url\n    }\n    products(first: $limit, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetBySlug($slug: String!) {\n  product(where: {slug: $slug}) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetColors($slug: String!) {\n  product(where: {slug: $slug}) {\n    variants {\n      ... on ProductColorVariant {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetColorsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCountInCollection($slug: String) {\n  productsConnection(where: {collections_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountInCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetSizes($slug: String!) {\n  product(where: {slug: $slug}) {\n    variants {\n      ... on ProductSizeVariant {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetSizesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearch($search: String!) {\n  products(where: {_search: $search}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCount {\n  productsConnection {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCountInCategory($slug: String) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    aggregate {\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountInCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetList($limit: Int!, $offset: Int!) {\n  products(first: $limit, skip: $offset) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetRelated($slug: String!, $categoriesSlugs: [String!]) {\n  products(\n    where: {slug_not: $slug, AND: {categories_some: {slug_in: $categoriesSlugs}}}\n    first: 6\n  ) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetRelatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSlugs {\n  products {\n    slug\n  }\n}"): typeof import('./graphql').ProductsGetSlugsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
