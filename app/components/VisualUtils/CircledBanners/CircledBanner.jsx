import {Image} from '@shopify/hydrogen';

//Styles
import styles from './CircledBanner.module.css';

const CircledBanner = ({imageSrc}) => {
  return (
    <Image
      className={styles.circledBanner}
      width={100}
      height={100}
      src={imageSrc}
      alt="circledBanner"
    />
  );
};

export default CircledBanner;
