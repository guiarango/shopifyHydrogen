//Styles
import styles from '~/components/Products/PLP/PLP Utils/PLPProductDescriptions.module.css';

//Utils
import {formatPrice} from '~/Utils/formatPrice';

const PLPProductDescriptions = ({title, price, compareAtPrice}) => {
  //Used to create a markdown if compare at price is higher than price
  let priceElement;

  if (compareAtPrice != null && compareAtPrice != '0.0') {
    const previousPrice = formatPrice(compareAtPrice);
    const nowPrice = formatPrice(price);

    priceElement = (
      <div className={styles.priceMarkdownContainer}>
        <small className={styles.priceNow}>${nowPrice}</small>
        <small className={styles.priceBefore}>${previousPrice}</small>
      </div>
    );
  } else {
    priceElement = (
      <small className={styles.price}>${formatPrice(price)}</small>
    );
  }

  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      {priceElement}
    </>
  );
};

export default PLPProductDescriptions;
