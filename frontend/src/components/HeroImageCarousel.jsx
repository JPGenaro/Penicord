'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
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

  const openLightbox = useCallback((src, index) => {
    setLightboxImage({ src, index });
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setLightboxImage(null);
  }, []);

  const prevLightbox = useCallback(() => {
    if (!lightboxImage) return;
    const newIndex = (lightboxImage.index - 1 + images.length) % images.length;
    setLightboxImage({ src: images[newIndex], index: newIndex });
  }, [lightboxImage]);

  const nextLightbox = useCallback(() => {
    if (!lightboxImage) return;
    const newIndex = (lightboxImage.index + 1) % images.length;
    setLightboxImage({ src: images[newIndex], index: newIndex });
  }, [lightboxImage]);

  // Prevenir scroll del body cuando el lightbox está abierto
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // Cerrar con tecla Escape y navegar con flechas
  useEffect(() => {
    const handleKeyboard = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevLightbox();
      } else if (e.key === 'ArrowRight') {
        nextLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [lightboxOpen, closeLightbox, prevLightbox, nextLightbox]);

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
    <>
    <div className="embla relative w-full h-full overflow-hidden rounded-3xl group">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {images.map((src, index) => (
            <div 
              className="embla__slide relative flex-shrink-0 w-full h-full min-w-0 cursor-pointer" 
              key={index}
              onClick={() => openLightbox(src, index)}
            >
              {/* Overlay con gradiente mejorado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10 group-hover:bg-gradient-to-t group-hover:from-black/30 group-hover:via-transparent group-hover:to-black/10 transition-all" />
              
              <Image
                src={src}
                alt={`Taller Ruggeri ${index + 1}`}
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

    {/* Lightbox Modal */}
    <AnimatePresence>
      {lightboxOpen && lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Botón cerrar */}
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-20 right-6 z-[10000] bg-gray-200/20 hover:bg-gray-300/30 text-white p-4 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 shadow-2xl"
            aria-label="Cerrar"
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Contador en lightbox */}
          <div className="absolute top-6 left-6 z-50 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md border border-white/20">
            <span className="text-red-400">{lightboxImage.index + 1}</span>
            <span className="text-white/60 mx-1">/</span>
            <span className="text-white/80">{images.length}</span>
          </div>

          {/* Botones de navegación en lightbox */}
          <button
            onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Imagen anterior"
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Siguiente imagen"
          >
            <FaChevronRight className="text-2xl" />
          </button>

          {/* Imagen ampliada */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-[95vw] max-h-[95vh] w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage.src}
              alt={`Taller Ruggeri ${lightboxImage.index + 1} - Ampliado`}
              width={1920}
              height={1080}
              className="object-contain max-w-full max-h-[95vh] rounded-lg shadow-2xl"
              priority
            />
          </motion.div>

          {/* Indicadores (dots) en lightbox */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2.5 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setLightboxImage({ src: images[index], index });
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === lightboxImage.index 
                    ? 'w-10 bg-white shadow-lg shadow-white/50' 
                    : 'w-2.5 bg-white/40 hover:bg-white/70 hover:w-6'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default HeroImageCarousel;