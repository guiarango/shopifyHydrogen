import {Link} from '@remix-run/react';

//Styles
import style from '~/components/Products/PLP/ProductItemPLP.module.css';

//Components
import PLPProductImage from './PLP Utils/PLPProductImage';
import PLPProductDescriptions from './PLP Utils/PLPProductDescriptions';

export default function ProductItemPLP({product, loading}) {
  //Destructure product info
  const {
    id,
    handle,
    title,
    images,
    availableForSale,
    priceRange,
    compareAtPriceRange,
  } = product;

  //If product is not available for sale, minimum price of a variant is 0 or doesn't have images, then don't show it
  if (
    !availableForSale ||
    priceRange.minVariantPrice.amount == '0.0' ||
    images.nodes.length == 0
  )
    return;

  return (
    <div className={`${style.productItem} recommended-product`}>
      <Link
        className={`${style.productContainer} recommended-product`}
        key={id}
        id={id}
        to={`/products/${handle}`}
      >
        <PLPProductImage images={images.nodes} loading={loading} />

        <PLPProductDescriptions
          title={title}
          price={priceRange.minVariantPrice.amount}
          compareAtPrice={compareAtPriceRange.minVariantPrice.amount}
        />
      </Link>
    </div>
  );
}
