'use client';
import { FaWhatsapp, FaMapMarkerAlt, FaClock, FaDirections, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

/**
 * Contact - sección de contacto y mapa.
 *
 * Muestra información de contacto (dirección, teléfono, horarios)
 * y un iframe con la ubicación en Google Maps.
 *
 * @component
 * @returns {JSX.Element} Sección de contacto completa.
 */
const Contact = () => {
  const mapAddress = "Alejandro Aguado 1017, Barrio Talleres Oeste, Córdoba, Argentina";
  const coordinates = "-31.3895,-64.2068"; // Coordenadas aproximadas de Talleres Oeste
  
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // URLs para diferentes aplicaciones de mapas
  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`, '_blank');
  };

  const openInWaze = () => {
    window.open(`https://waze.com/ul?q=${encodeURIComponent(mapAddress)}`, '_blank');
  };

  const getDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapAddress)}`, '_blank');
  };

  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Contacto</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Atención clara y trato de confianza para tu vehículo.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                <div className="bg-red-600 p-3 rounded-lg mr-4 shadow-lg shadow-red-900/30">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Dirección</h4>
                  <p className="text-gray-300">Alejandro Aguado 1017, Barrio Talleres Oeste</p>
                  <p className="text-gray-300">Córdoba, Argentina</p>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(mapAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-500 text-sm mt-1 inline-block"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-center bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                <div className="bg-red-600 p-3 rounded-lg mr-4 shadow-lg shadow-red-900/30">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-gray-300">+54 351 890-0167</p>
                  <a 
                    href="https://wa.me/5493518900167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-500 text-sm mt-1 inline-block"
                  >
                    Enviar mensaje →
                  </a>
                </div>
              </div>

              <div className="flex items-center bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                <div className="bg-red-600 p-3 rounded-lg mr-4 shadow-lg shadow-red-900/30">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Horarios</h4>
                  <p className="text-gray-300">Lunes a Viernes: 9:00 a 18:00</p>
                  <p className="text-gray-300">Sábados y Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            {/* Botones de navegación */}
            <div className="mt-8 space-y-3">
              <h4 className="text-lg font-semibold mb-4">¿Cómo llegar?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={getDirections}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <FaDirections className="text-lg" />
                  Cómo llegar
                </button>
                <button
                  type="button"
                  onClick={openInWaze}
                  className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <FaMapMarkedAlt className="text-lg" />
                  Abrir en Waze
                </button>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-bold mb-6">Ubicación del taller</h3>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-red-500/40 shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 to-red-700 z-10" />
              <iframe
                src={mapEmbedUrl} 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Penicord Taller Mecánico"
              ></iframe>
            </div>
            
            {/* Referencia de ubicación */}
            <div className="mt-6 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Referencia:</strong> Estamos en Barrio Talleres Oeste, cerca de Av. Colón. 
                Zona céntrica de fácil acceso en transporte público o vehículo particular.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;