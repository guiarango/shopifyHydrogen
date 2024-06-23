import {Pagination} from '@shopify/hydrogen';

//Components
import ProductGripPLP from '../Products/PLP/ProductGripPLP';

const ProductsPagination = ({products}) => {
  return (
    <Pagination connection={products}>
      {({nodes, isLoading, PreviousLink, NextLink}) => (
        <>
          <PreviousLink>
            {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
          </PreviousLink>
          <ProductGripPLP products={nodes} />
          <br />
          <NextLink>
            {isLoading ? 'Loading...' : <span>Load more ↓</span>}
          </NextLink>
        </>
      )}
    </Pagination>
  );
};

export default ProductsPagination;
