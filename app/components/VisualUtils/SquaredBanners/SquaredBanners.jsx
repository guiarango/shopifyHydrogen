import {useRef, useState} from 'react';

//Styles
import styles from './SquaredBanners.module.css';

//Components
import SquaredBanner from './SquaredBanner';

const SquaredBanners = ({title, banners}) => {
  const imageContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - imageContainerRef.current.offsetLeft);
    setScrollLeft(imageContainerRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - imageContainerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    imageContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div
        className={styles.squaredBannersContainer}
        ref={imageContainerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className={styles.squaredBannersDraggable}>
          {banners.map((banner, index) => (
            <SquaredBanner key={index} imageSrc={banner.imageSrc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SquaredBanners;
