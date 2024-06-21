import {useState} from 'react';
import {Link} from '@remix-run/react';

//Styles
import style from '~/components/Products/PLP/ProductItemPLP.module.css';

//Components
import PLPProductImage from './PLP Utils/PLPProductImage';
import PLPProductDescriptions from './PLP Utils/PLPProductDescriptions';
import AddToCartButton from '~/components/ProductsUtils/AddToCartButton';

export default function ProductItem({product, variants}) {
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

  const [selectedVariant, setSelectedVariant] = useState(null);

  console.log(product);

  //If product is not available for sale or minimum price of a variant is 0, then don't show it
  if (!availableForSale || priceRange.minVariantPrice.amount == '0.0') return;

  return (
    <div className={`${style.productItem} recommended-product`}>
      <Link
        className={`${style.productContainer} recommended-product`}
        key={id}
        id={id}
        to={`/products/${handle}`}
      >
        <PLPProductImage images={images.nodes} />

        <PLPProductDescriptions
          title={title}
          price={priceRange.minVariantPrice.amount}
          compareAtPrice={compareAtPriceRange.minVariantPrice.amount}
        />
      </Link>
      {/* Agregar tallaje y color */}

      <AddToCartButton />
    </div>
  );
}
