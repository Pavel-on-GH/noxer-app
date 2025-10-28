import { useState, useEffect } from 'react';
import Slider_1 from '../../assets/images/slider_1.png';
import Slider_2 from '../../assets/images/slider_2.png';
import Slider_3 from '../../assets/images/slider_3.png';
import styles from './Slider.module.scss';
import clsx from 'clsx';

const moveSlides = [
  { src: Slider_1, id: 201 },
  { src: Slider_2, id: 202 },
  { src: Slider_3, id: 203 },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  useEffect(() => {
    if (!autoPlayEnabled) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % moveSlides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [autoPlayEnabled]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={styles.sliderWrapper}
      onMouseEnter={() => setAutoPlayEnabled(false)}
      onMouseLeave={() => setAutoPlayEnabled(true)}>
      <div className={styles.slidesContainer}>
        {moveSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={clsx(styles.slideItem, {
              [styles.activeSlide]: currentSlide === idx,
              [styles.prevSlide]: currentSlide === (idx + 1) % moveSlides.length,
              [styles.nextSlide]:
                currentSlide === (idx - 1 + moveSlides.length) % moveSlides.length,
            })}>
            <img src={slide.src} alt={`Слайд ${slide.id}`} />
          </div>
        ))}
      </div>

      <div className={styles.navigationDots}>
        {moveSlides.map((_, idx) => (
          <button
            key={idx}
            className={clsx(styles.dot, { [styles.activeDot]: currentSlide === idx })}
            onClick={() => goToSlide(idx)}
            aria-label={`Сменить на ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
