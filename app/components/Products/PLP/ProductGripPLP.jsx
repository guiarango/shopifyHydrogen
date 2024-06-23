//Components
import ProductItemPLP from './ProductItemPLP';

const ProductGripPLP = ({products}) => {
  return (
    <div className="products-grid">
      {products.map((product, index) => {
        return (
          <ProductItemPLP
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        );
      })}
    </div>
  );
};

export default ProductGripPLP;
