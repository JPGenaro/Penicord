import Image from 'next/image';
import { FaWhatsapp, FaTools } from 'react-icons/fa';
// Importamos el nuevo componente de carrusel
import HeroImageCarousel from './HeroImageCarousel'; 

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-red-600/20 px-4 py-2 rounded-full mb-6">
              <FaTools className="text-red-400 mr-2" />
              <span className="text-red-300">Taller Mecánico Especializado</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expertos en <span className="text-red-500">Mecánica</span> Automotriz
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              En Penicord brindamos soluciones integrales para el mantenimiento y reparación de tu vehículo. 
              Confía en profesionales con experiencia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5493512345678"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                Solicitar Turno
              </a>
              
              <a
                href="#servicios"
                className="border-2 border-white/30 hover:border-red-500 text-white hover:text-red-300 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Image/Carousel (Right Column) */}
          {/* Mantenemos el contenedor que le da altura al carrusel */}
          <div className="relative h-96 lg:h-full"> 
            {/* 1. Eliminamos el div de fondo rojo/10 que tenía tu código original */}
            {/* 2. Reemplazamos el placeholder del ícono y texto por el carrusel */}
            <HeroImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;