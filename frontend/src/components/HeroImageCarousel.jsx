'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  '/entrada1.webp',
  '/entrada2.webp',
  '/herramientas1.webp', 
  '/interior1.webp',
  '/interior2.webp',
  '/interior3.webp',
];

/**
 * HeroImageCarousel - carrusel de imágenes mejorado para la sección Hero.
 *
 * Incluye navegación manual, indicadores, contador y autoplay.
 * @component
 * @returns {JSX.Element} Carrusel de imágenes responsive con controles.
 */
const HeroImageCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    draggable: true,
    dragFree: false,
  }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }), 
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="embla relative w-full h-full overflow-hidden rounded-3xl group">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {images.map((src, index) => (
            <div 
              className="embla__slide relative flex-shrink-0 w-full h-full min-w-0" 
              key={index}
            >
              {/* Overlay con gradiente mejorado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10" />
              
              <Image
                src={src}
                alt={`Taller Penicord ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación mejorados */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-gray-800 p-3.5 rounded-full shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:-translate-x-1 backdrop-blur-sm border border-white/20"
        aria-label="Imagen anterior"
      >
        <FaChevronLeft className="text-lg" />
      </button>
      
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-gray-800 p-3.5 rounded-full shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 hover:translate-x-1 backdrop-blur-sm border border-white/20"
        aria-label="Siguiente imagen"
      >
        <FaChevronRight className="text-lg" />
      </button>

      {/* Indicadores (dots) mejorados */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex 
                ? 'w-10 bg-white shadow-lg shadow-white/50' 
                : 'w-2.5 bg-white/40 hover:bg-white/70 hover:w-6'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador de imágenes mejorado */}
      <div className="absolute top-6 right-6 z-20 bg-gradient-to-r from-black/70 to-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md border border-white/10 shadow-xl">
        <span className="text-red-400">{selectedIndex + 1}</span>
        <span className="text-white/60 mx-1">/</span>
        <span className="text-white/80">{images.length}</span>
      </div>
    </div>
  );
};

export default HeroImageCarousel;