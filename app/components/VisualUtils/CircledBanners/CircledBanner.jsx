import {Image} from '@shopify/hydrogen';

//Styles
import styles from './CircledBanner.module.css';

const CircledBanner = ({imageSrc}) => {
  return (
    <div className={styles.circledBannerContainer}>
      <Image
        className={styles.circledBanner}
        src={imageSrc}
        alt="circledBanner"
      />
    </div>
  );
};

export default CircledBanner;
