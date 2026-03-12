'use client';
import { FaCog, FaOilCan, FaCar, FaTools, FaExclamationTriangle, FaCarBattery } from 'react-icons/fa';
import { motion } from 'framer-motion';

/**
 * Services - lista de tarjetas de servicios.
 * @component
 * @returns {JSX.Element} Sección de servicios.
 */
const Services = () => {
  const services = [
    {
      icon: <FaOilCan className="text-3xl text-red-600" />,
      title: "Cambio de Aceite y Filtros",
      description: "Servicio completo de cambio de aceite y filtros para cuidar el rendimiento del motor.",
      image: "/Servicios/servicioAceiteFiltro.webp"
    },
    {
      icon: <FaCarBattery className="text-3xl text-red-600" />,
      title: "Electricidad del Automotor",
      description: "Reparación e instalación eléctrica para vehículos y camiones, incluyendo arranques y alternadores.",
      image: "/Servicios/servicioElectricidad.webp"
    },
    {
      icon: <FaExclamationTriangle className="text-3xl text-red-600" />,
      title: "Sistemas de Frenos",
      description: "Revisión y reparación completa del sistema de frenos para garantizar tu seguridad.",
      image: "/Servicios/servicioFrenos.webp"
    },
    {
      icon: <FaTools className="text-3xl text-red-600" />,
      title: "Mecánica General",
      description: "Mantenimiento preventivo y reparaciones generales para mantener tu vehículo en buenas condiciones.",
      image: "/Servicios/servicioMecanica.webp"
    },
    {
      icon: <FaCog className="text-3xl text-red-600" />,
      title: "Reparación de Motor",
      description: "Diagnóstico y reparación de motores de distintas marcas y modelos.",
      image: "/Servicios/servicioReparacion.webp"
    },
    {
      icon: <FaCar className="text-3xl text-red-600" />,
      title: "Servicios Electromecánicos",
      description: "Soluciones para fallas complejas en los sistemas de tu vehículo.",
      image: "/Servicios/servicioElectromecanico.webp"
    }
  ];

  // Configuración de la animación Staggered
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1 
      }
    }
  };

  const item = {
    hidden: { y: 20 },
    visible: { y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="servicios" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-red-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ y: 0, opacity: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Servicios con honestidad y confianza
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revisamos cada trabajo con claridad, te explicamos lo necesario y buscamos soluciones reales para tu vehículo.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true, amount: 0.3 }}
          role="list"
        >
          {services.map((service, index) => (
            <motion.article 
              key={index} 
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              role="listitem"
            >
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-b-full z-10" />
              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl shrink-0 group-hover:scale-105 transition-transform duration-300" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug">{service.title}</h3>
                </div>
                {service.image && (
                  <div className="w-full h-60 overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;