'use client';
import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const images = [
  '/entrada1.webp',
  '/entrada2.webp',
  '/herramientas1.webp', 
  '/interior1.webp',
  '/interior2.webp',
  '/interior3.webp',
];

const HeroImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    draggable: false, 
  }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }), 
  ]);

  const setupEmbla = useCallback(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  useEffect(() => {
    window.addEventListener('resize', setupEmbla);
    return () => window.removeEventListener('resize', setupEmbla);
  }, [emblaApi, setupEmbla]);

  return (
    <div 
      className="embla relative w-full h-full overflow-hidden rounded-3xl" 
      ref={emblaRef}
    >
      <div className="embla__container flex h-full">
        {images.map((src, index) => (
          <div 
            className="embla__slide relative flex-shrink-0 w-full h-full min-w-0" 
            key={index}
          >
            <Image
              src={src}
              alt={`Taller Penicord ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }} 
              priority={index === 0} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroImageCarousel;