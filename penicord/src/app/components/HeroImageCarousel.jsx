'use client';
import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

// Rutas verificadas según la estructura de tu carpeta 'public'
const images = [
  '/entrada1.jpg',
  '/entrada2.jpg',
  '/herramientas1.jpg', // Usamos esta imagen de tu carpeta 'public'
  '/interior1.jpg',
  '/interior2.jpg',
  '/interior3.jpg',
];

const HeroImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, // Carrusel infinito
    draggable: false, // Deshabilita el arrastre manual para que solo rote automáticamente
  }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }), // Rota cada 4 segundos
  ]);

  // Asegura que el carrusel se inicialice correctamente (buena práctica con Embla)
  const setupEmbla = useCallback(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  useEffect(() => {
    // Escucha el evento de redimensionamiento
    window.addEventListener('resize', setupEmbla);
    return () => window.removeEventListener('resize', setupEmbla);
  }, [emblaApi, setupEmbla]);

  return (
    // Contenedor principal con la referencia de Embla
    <div 
      className="embla relative w-full h-full overflow-hidden rounded-3xl" 
      ref={emblaRef}
    >
      <div className="embla__container flex h-full">
        {images.map((src, index) => (
          // Cada slide, ocupa el 100% de la altura y ancho del contenedor
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