import {Image} from '@shopify/hydrogen';

//Styles
import styles from './SquaredBanner.module.css';

const SquaredBanner = ({imageSrc}) => {
  return (
    <div className={styles.squaredBannerContainer}>
      <Image
        className={styles.squaredBanner}
        src={imageSrc}
        alt="squaredBanner"
      />
    </div>
  );
};

export default SquaredBanner;
