import {defer} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';

//Services
import {
  FEATURED_COLLECTION_QUERY,
  RECOMMENDED_PRODUCTS_QUERY,
} from '~/services/PLPServices';

//Components
import RecommendedProducts from '~/components/ProductsUtils/RecommendedProducts';
import CircledBanners from '~/components/VisualUtils/CircledBanners/CircledBanners';

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
  const recommendedProducts = await storefront.query(
    RECOMMENDED_PRODUCTS_QUERY,
  );
  // const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  // const featuredCollection = collections.nodes[0];
  // return defer({featuredCollection, recommendedProducts});
  return defer({recommendedProducts});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const {recommendedProducts} = useLoaderData();

  const circledBannersSrc = [
    {
      imageSrc:
        'https://cdn.shopify.com/s/files/1/0879/1103/9262/files/Main_d624f226-0a89-4fe1-b333-0d1548b43c06.jpg?v=1717597832',
    },
    {
      imageSrc:
        'https://cdn.shopify.com/s/files/1/0879/1103/9262/files/Main_d624f226-0a89-4fe1-b333-0d1548b43c06.jpg?v=1717597832',
    },
    {
      imageSrc:
        'https://cdn.shopify.com/s/files/1/0879/1103/9262/files/Main_d624f226-0a89-4fe1-b333-0d1548b43c06.jpg?v=1717597832',
    },
    {
      imageSrc:
        'https://cdn.shopify.com/s/files/1/0879/1103/9262/files/Main_d624f226-0a89-4fe1-b333-0d1548b43c06.jpg?v=1717597832',
    },
    {
      imageSrc:
        'https://cdn.shopify.com/s/files/1/0879/1103/9262/files/Main_d624f226-0a89-4fe1-b333-0d1548b43c06.jpg?v=1717597832',
    },
  ];

  return (
    <main className="home">
      <RecommendedProducts
        products={recommendedProducts}
        title="¡Conoce lo nuevo!"
      />
      <CircledBanners title={'En oferta'} banners={circledBannersSrc} />
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
