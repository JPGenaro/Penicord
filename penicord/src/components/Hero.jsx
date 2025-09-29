'use client';
import { FaWhatsapp, FaTools } from 'react-icons/fa';
import HeroImageCarousel from './HeroImageCarousel'; 
import { motion } from 'framer-motion'; 

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Text Content - Envolvemos el contenido en motion.div */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center bg-red-600/20 px-4 py-2 rounded-full mb-6">
              <FaTools className="text-red-400 mr-2" />
              <span className="text-red-300">Taller Mecánico Especializado</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
              Expertos en <span className="text-red-500">Mecánica</span> Automotriz
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-2xl">
              En Penicord brindamos soluciones integrales para el mantenimiento y reparación de tu vehículo. 
              Confía en profesionales con experiencia.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Los botones son parte del mismo itemVariants */}
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
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }} 
            className="relative h-96 lg:h-full"
          > 
            <HeroImageCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;