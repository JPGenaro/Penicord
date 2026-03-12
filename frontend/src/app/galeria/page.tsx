'use client';
import { useCallback, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const historiaActual = {
  titulo: 'Ford Ka 1.0 2007 Viral',
  trabajo: 'Cambio de cazoletas delanteras',
  descripcion: 'El vehículo ingresó por solicitud del cliente para reemplazo de cazoletas delanteras. Se renovó el apoyo superior (goma y chapa), el apoyo inferior de goma y la crapodina ubicada próxima al resorte de suspensión. Para completar el trabajo correctamente fue necesario desajustar el conjunto de suspensión y luego recalibrar el armado final. El resultado fue una suspensión más estable, sin ruidos y con el cliente plenamente conforme.',
  carruseles: [
    {
      categoria: 'Estado',
      fotos: [
        '/Trabajos/FordKa_1_0_2007_N1_juan/CazoletasDelantera/estado1.webp',
        '/Trabajos/FordKa_1_0_2007_N1_juan/CazoletasDelantera/estado2.webp',
        '/Trabajos/FordKa_1_0_2007_N1_juan/CazoletasDelantera/estado3.webp',
      ],
    },
    {
      categoria: 'Paso',
      fotos: [
        '/Trabajos/FordKa_1_0_2007_N1_juan/CazoletasDelantera/paso1.webp',
        '/Trabajos/FordKa_1_0_2007_N1_juan/CazoletasDelantera/paso2.webp',
        '/Trabajos/FordKa_1_0_2007_N1_juan/CazoletasDelantera/paso3.webp',
        '/Trabajos/FordKa_1_0_2007_N1_juan/CazoletasDelantera/paso4.webp',
      ],
    },
    {
      categoria: 'Final',
      fotos: [
        '/Trabajos/FordKa_1_0_2007_N1_juan/CazoletasDelantera/final1.webp',
        '/Trabajos/FordKa_1_0_2007_N1_juan/CazoletasDelantera/final2.webp',
      ],
    },
  ],
};

type CategoryCarouselProps = {
  categoria: string;
  fotos: string[];
  tituloHistoria: string;
};

const CategoryCarousel = ({ categoria, fotos, tituloHistoria }: CategoryCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: false,
    },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + fotos.length) % fotos.length);
  }, [fotos.length]);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % fotos.length);
  }, [fotos.length]);

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

  useEffect(() => {
    if (!lightboxOpen) return;

    document.body.style.overflow = 'hidden';
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };

    window.addEventListener('keydown', handleKeyboard);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [lightboxOpen, closeLightbox, prevLightbox, nextLightbox]);

  return (
    <>
      <article className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <div className="embla h-full">
            <div className="embla__viewport h-full" ref={emblaRef}>
              <div className="embla__container flex h-full">
                {fotos.map((foto, index) => (
                  <div
                    key={foto}
                    className="embla__slide relative flex-shrink-0 w-full h-full min-w-0 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={foto}
                      alt={`${tituloHistoria} - ${categoria} ${index + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label={`Imagen anterior de ${categoria}`}
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label={`Siguiente imagen de ${categoria}`}
          >
            <FaChevronRight className="text-sm" />
          </button>

          {fotos.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/35 px-2 py-1 rounded-full backdrop-blur-sm">
              {fotos.map((_, index) => (
                <button
                  key={`${categoria}-dot-${index}`}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    selectedIndex === index ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ir a ${categoria} ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="px-3 py-2 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-800">{categoria}</p>
          <p className="text-xs text-gray-500">{selectedIndex + 1}/{fotos.length}</p>
        </div>
      </article>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 z-[10000] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20"
              aria-label="Cerrar imagen"
            >
              <FaTimes className="text-xl" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-[10000] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20"
              aria-label="Imagen anterior"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-[10000] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20"
              aria-label="Siguiente imagen"
            >
              <FaChevronRight className="text-xl" />
            </button>

            <div className="absolute top-6 left-6 z-[10000] bg-white/10 text-white px-3 py-1.5 rounded-full text-sm border border-white/20">
              {categoria} {lightboxIndex + 1}/{fotos.length}
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-[95vw] h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={fotos[lightboxIndex]}
                alt={`${tituloHistoria} - ${categoria} ${lightboxIndex + 1} ampliada`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const GaleriaPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section id="galeria-historias" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-red-100/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Título de la Sección */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
              Trabajos del Taller
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empezamos a cargar historias reales del taller. Acá va la primera.
            </p>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{historiaActual.titulo}</h2>
              <p className="text-red-600 font-semibold mb-2">{historiaActual.trabajo}</p>
              <p className="text-gray-600">{historiaActual.descripcion}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {historiaActual.carruseles.map((bloque) => (
                <CategoryCarousel
                  key={bloque.categoria}
                  categoria={bloque.categoria}
                  fotos={bloque.fotos}
                  tituloHistoria={historiaActual.titulo}
                />
              ))}
            </div>
          </motion.article>

          {/* Cierre */}
          <div className="text-center mt-16 bg-white border border-gray-100 rounded-2xl p-8 shadow-md">
            <p className="text-lg text-gray-700">
              Cada auto se revisa según su estado real. Si querés consultarnos, en la sección de contacto están todos los datos.
            </p>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default GaleriaPage;