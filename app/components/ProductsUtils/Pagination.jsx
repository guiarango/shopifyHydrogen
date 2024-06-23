import React from 'react';

const ProductsPagination = ({products}) => {
  return (
    <Pagination connection={products}>
      {({nodes, isLoading, PreviousLink, NextLink}) => (
        <>
          <PreviousLink>
            {isLoading ? 'Loading...' : <span>↑ Load previous</span>}
          </PreviousLink>
          <ProductsGrid products={nodes} />
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
