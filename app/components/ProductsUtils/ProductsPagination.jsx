import {Pagination} from '@shopify/hydrogen';

//Components
import ProductGripPLP from '../Products/PLP/ProductGridPLP';
import Button from '../UI/Button';

const ProductsPagination = ({products}) => {
  return (
    <Pagination connection={products}>
      {({nodes, isLoading, PreviousLink, NextLink}) => (
        <>
          <PreviousLink>
            {isLoading ? <></> : <Button>↑ Cargar anteriores</Button>}
          </PreviousLink>
          <ProductGripPLP products={nodes} />
          <NextLink>
            {isLoading ? <></> : <Button>Cargar más ↓</Button>}
          </NextLink>
        </>
      )}
    </Pagination>
  );
};

export default ProductsPagination;
