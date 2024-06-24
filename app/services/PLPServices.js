// Graphql for featured collection query

export const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

// Graphql for recommended products query

export const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    availableForSale
    title
    handle
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 2) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
    variants(first: 30) {
      edges {
        node {
          id
          title
          sku
          priceV2 {
            amount
          }
          compareAtPriceV2{
            amount
          }
          availableForSale
          selectedOptions{
              name
              value
          }
        }
      }
    }
    giftProduct: metafield(namespace:"custom",key:"giftproduct"){
      value
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

// Graphql for collection $handle query

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment ProductItem on Product {
    id
    availableForSale
    handle
    title
    images(first: 2) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
    featuredImage {
      id
      altText
      url
      width
      height
    }
    compareAtPriceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 1) {
      nodes {
        selectedOptions {
          name
          value
        }
      }
    }
    giftProduct: metafield(namespace:"custom",key:"giftproduct"){
      value
    }
  }
`;

export const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;

// Graphql for collection all query

export const CATALOG_QUERY = `#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...ProductItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${PRODUCT_ITEM_FRAGMENT}
`;
