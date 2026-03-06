'use client';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
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
  
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-xl text-gray-300">Estamos para ayudarte con tu vehículo</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Dirección</h4>
                  {/* Dirección */}
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

              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Teléfono</h4>
                  <p className="text-gray-300">+54 351 890-0167</p>
                </div>
              </div>

             

              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <FaClock className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold">Horarios</h4>
                  <p className="text-gray-300">Lunes a Viernes: 9:00 a 18:00</p>
                  <p className="text-gray-300">Sábados y Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h3 className="text-2xl font-semibold mb-6">Ubicación de nuestro taller</h3>
            
            <div className="relative h-96 w-full rounded-lg overflow-hidden border-2 border-red-600 shadow-xl">
              <iframe
                src={mapEmbedUrl} 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Penicord Taller Mecánico"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;