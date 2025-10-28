import { useState, useEffect } from 'react';

export const useSliderCarousel = (slidesCount: number, intervalMs = 4000) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesCount);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [isAutoPlay, slidesCount, intervalMs]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slidesCount);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  const goToSlide = (index: number) => setActiveSlide(index);

  return { activeSlide, isAutoPlay, setIsAutoPlay, nextSlide, prevSlide, goToSlide };
};
