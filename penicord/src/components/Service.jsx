'use client';
import { FaCog, FaOilCan, FaCar, FaTools, FaExclamationTriangle, FaCarBattery } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <FaOilCan className="text-3xl text-red-600" />,
      title: "Cambio de Aceite y Filtros",
      description: "Servicio completo de cambio de aceite y filtros de primera calidad para un óptimo rendimiento."
    },
    {
      icon: <FaCarBattery className="text-3xl text-red-600" />,
      title: "Electricidad del Automotor",
      description: "Reparación e instalación eléctrica para vehículos y camiones, incluyendo arranques y alternadores."
    },
    {
      icon: <FaExclamationTriangle className="text-3xl text-red-600" />,
      title: "Sistemas de Frenos",
      description: "Revisión y reparación completa del sistema de frenos para garantizar tu seguridad."
    },
    {
      icon: <FaTools className="text-3xl text-red-600" />,
      title: "Mecánica General",
      description: "Mantenimiento preventivo y reparaciones generales para mantener tu vehículo en perfectas condiciones."
    },
    {
      icon: <FaCog className="text-3xl text-red-600" />,
      title: "Reparación de Motor",
      description: "Diagnóstico y reparación especializada de motores de todas las marcas y modelos."
    },
    {
      icon: <FaCar className="text-3xl text-red-600" />,
      title: "Servicios Electromecánicos",
      description: "Soluciones integrales para fallas complejas en los sistemas de tu vehículo."
    }
  ];

  // Configuración de la animación Staggered
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios mecánicos y electromecánicos con un enfoque en la calidad y la experiencia.
          </p>
        </motion.div>

        {/* Contenedor de las tarjetas con la animación Staggered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
             <motion.div 
              key={index} 
              variants={item}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-red-50 p-4 rounded-xl inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Services;