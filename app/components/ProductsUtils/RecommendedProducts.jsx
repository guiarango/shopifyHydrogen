import {Await} from '@remix-run/react';
import {Suspense} from 'react';

//Styles
import styles from '~/components/ProductsUtils/RecommendedProducts.module.css';

//Components
import ProductItem from '~/components/Products/PLP/ProductItemPLP';

const RecommendedProducts = ({products, title}) => {
  return (
    <div className={styles.recommendedProducts}>
      <h2 className={styles.recommendedProductsTitle}>{title}</h2>
      <Suspense fallback={<div>Cargando...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className={styles.recommendedProductsGrid}>
              {products.nodes.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
};

export default RecommendedProducts;
