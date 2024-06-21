import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';

//Components
import RecommendedProducts from '~/components/ProductsUtils/RecommendedProducts';

//Services
import {
  FEATURED_COLLECTION_QUERY,
  RECOMMENDED_PRODUCTS_QUERY,
} from '~/services/PLPServices';

import {PRODUCT_QUERY, VARIANTS_QUERY} from '~/services/productUtilsServices';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({featuredCollection, recommendedProducts});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <main className="home">
      <RecommendedProducts
        products={data.recommendedProducts}
        title="¡Conoce lo nuevo!"
      />
    </main>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
