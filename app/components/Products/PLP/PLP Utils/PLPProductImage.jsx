import {Image} from '@shopify/hydrogen';

//Styles
import styles from '~/components/Products/PLP/PLP Utils/PLPProductImage.module.css';

const PLPProductImage = ({images}) => {
  return (
    <div className={styles.imagesContainer}>
      {images.length == 1 ? (
        <Image
          className={styles.singleImage}
          data={images[0]}
          aspectRatio="1/1"
          sizes="(min-width: 45em) 20vw, 50vw"
        />
      ) : (
        images.map((image, index) => (
          <Image
            key={index}
            className={`${styles.doubleImage} ${
              index == 1 ? styles.doubleImage2 : styles.doubleImage1
            }`}
            data={image}
            aspectRatio="1/1"
            sizes="(min-width: 45em) 20vw, 50vw"
          />
        ))
      )}
    </div>
  );
};

export default PLPProductImage;
