'use client';
import { FaWhatsapp, FaTools, FaAward, FaClock, FaWrench } from 'react-icons/fa';
import HeroImageCarousel from './HeroImageCarousel'; 
import { motion } from 'framer-motion'; 

/**
 * Hero - componente principal de la cabecera mejorado.
 *
 * Incluye título, descripción, estadísticas y llamadas a la acción,
 * con un carrusel de imágenes visualmente mejorado.
 *
 * @component
 * @returns {JSX.Element} Sección Hero para la página principal.
 */
const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12, 
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20 },
    visible: { y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const stats = [
    { icon: <FaAward />, value: "60+", label: "Años de experiencia" },
    { icon: <FaWrench />, value: "Real", label: "Diagnóstico claro" },
    { icon: <FaClock />, value: "Directo", label: "Atención sin vueltas" }
  ];

  return (
    <section id="inicio" className="relative pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh] py-8">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center bg-gradient-to-r from-red-600/20 to-red-500/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-red-500/30 mb-2"
            >
              <FaTools className="text-red-400 mr-2 text-lg" />
              <span className="text-red-300 font-medium">Taller familiar en Córdoba</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-7xl font-extrabold leading-tight"
            >
              Mecánica Automotriz{' '}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                de Confianza
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              En Penicord trabajamos con honestidad: revisamos tu vehículo, te explicamos qué tiene y resolvemos lo que realmente hace falta.
            </motion.p>
            
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href="https://wa.me/543518900167"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-red-500/50 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                <FaWhatsapp className="text-xl relative z-10" />
                <span className="relative z-10">Pedir Turno</span>
              </a>
              <a
                href="#servicios"
                className="group border-2 border-white/30 hover:border-red-500 bg-white/5 hover:bg-red-500/10 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Ver Servicios
              </a>
            </motion.div>
          </div>

          {/* Carrusel Mejorado */}
          <div className="relative h-[450px] lg:h-[600px]"> 
            {/* Efectos decorativos alrededor del carrusel */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 rounded-[2rem] blur-2xl opacity-60 animate-pulse"></div>
            
            {/* Border animado */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-[2rem] opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Contenedor del carrusel */}
            <div className="relative h-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
              <HeroImageCarousel />
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-3 rounded-full border border-red-500/60 shadow-xl backdrop-blur-sm">
              <p className="text-white font-semibold text-sm">Atención directa y diagnóstico sincero</p>
            </div>
          </div>
        </div>
      </div>

      {/* Separator wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;